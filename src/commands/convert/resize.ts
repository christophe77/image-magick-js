import util from 'util';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../core/core';
import { MagickResponse } from './types';
import { checkResizeParameters } from './errorHandling';

export default async function resize(
  sourceFile: string,
  targetFile: string,
  resize: string,
  force: boolean,
): Promise<MagickResponse> {
  try {
    checkResizeParameters(sourceFile, targetFile, resize);
    const execAsync = util.promisify(exec);
    if (force) {
      resize = `${resize}\!`;
    }
    const { stdout, stderr } = await execAsync(
      `${imageMagickCmd} convert ${sourceFile} -resize ${resize} ${targetFile}`,
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
