import util from 'util';
import fs from 'fs';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../utils/constants';
import { createFileIfDoesntExistSync } from '../../utils/files';
import { MagickResponse, ResizeParams } from './types';
import { checkResizeParameters } from './errorHandling';

export default async function resize(
  params: ResizeParams,
): Promise<MagickResponse> {
  try {
    checkResizeParameters(params);
    const { targetFile, sourceFile, force, resize } = params;
    const targetResizedFile = targetFile ? targetFile : sourceFile;
    createFileIfDoesntExistSync(targetResizedFile);

    const resizeOption = force ? `${resize}\!` : resize;

    const execAsync = util.promisify(exec);

    const { stdout } = await execAsync(
      `${imageMagickCmd} convert ${sourceFile} -resize ${resizeOption} ${targetResizedFile}`,
    );
    return {
      success: true,
      output: stdout,
    };
  } catch (e) {
    throw TypeError((e as Error).message);
  }
}
