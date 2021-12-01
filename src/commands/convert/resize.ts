import util from 'util';
import fs from 'fs';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../core/core';
import { MagickResponse, ResizeParams } from './types';
import { checkResizeParameters } from './errorHandling';


export default async function resize(
  params: ResizeParams,
): Promise<MagickResponse> {
  try {
    checkResizeParameters(params);
    const { targetFile, sourceFile, force, resize } = params;

    if (targetFile && !fs.existsSync(targetFile)) {
      fs.closeSync(fs.openSync(targetFile, 'w'));
    }
    const fileToResize = targetFile ? targetFile : sourceFile;
    const resizeOption = force ? `${resize}\!` : resize;

    const execAsync = util.promisify(exec);

    const { stdout, stderr } = await execAsync(
      `${imageMagickCmd} convert ${sourceFile} -resize ${resizeOption} ${fileToResize}`,
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
