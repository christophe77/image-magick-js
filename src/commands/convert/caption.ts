import util from 'util';
import fs from 'fs';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../core/core';
import { MagickResponse, CaptionParams } from './types';
import { checkCaptionParameters } from './errorHandling';

export default async function caption(
  params: CaptionParams,
): Promise<MagickResponse> {
  try {
    checkCaptionParameters(params);
    const { targetFile, pointSize, size, gravity, caption } = params
    const execAsync = util.promisify(exec);
    if (!fs.existsSync(targetFile)) {
      fs.closeSync(fs.openSync(targetFile, 'w'));
    }
    const pointSizeOption =
      (pointSize?.toString() !== '' && `-pointsize ${pointSize}`) || '';
    const sizeOption = (size && size !== '' && `-size ${size}`) || '';
    const gravityOption =
      (gravity && gravity !== '' && `-gravity ${gravity}`) || '';

    const { stdout, stderr } = await execAsync(
      `${imageMagickCmd} convert ${pointSizeOption} ${sizeOption} ${gravityOption} caption:"${caption}" ${targetFile}`,
    );
    if (stderr) {
      throw TypeError(stderr);
    }
    return {
      success: true,
      output: stdout,
    };
  } catch (e) {
    throw TypeError((e as Error).message);
  }
}
