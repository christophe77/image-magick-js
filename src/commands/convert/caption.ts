import util from 'util';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../utils/constants';
import { createFileIfDoesntExistSync } from '../../utils/files';
import { MagickResponse, CaptionParams } from './types';
import { checkCaptionParameters } from './errorHandling';

export default async function caption(
  params: CaptionParams,
): Promise<MagickResponse> {
  try {
    checkCaptionParameters(params);
    const { targetFile, pointSize, size, gravity, caption } = params;
    createFileIfDoesntExistSync(targetFile);
    const execAsync = util.promisify(exec);

    const pointSizeOption =
      (pointSize?.toString() !== '' && `-pointsize ${pointSize}`) || '';
    const sizeOption = (size && size !== '' && `-size ${size}`) || '';
    const gravityOption =
      (gravity && gravity !== '' && `-gravity ${gravity}`) || '';

    const { stdout } = await execAsync(
      `${imageMagickCmd} convert ${pointSizeOption} ${sizeOption} ${gravityOption} caption:"${caption}" ${targetFile}`,
    );
    return {
      success: true,
      output: stdout,
    };
  } catch (e) {
    throw TypeError((e as Error).message);
  }
}
