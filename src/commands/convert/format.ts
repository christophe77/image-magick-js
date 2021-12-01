import util from 'util';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../core/core';
import { MagickResponse } from './types';
import { checkFormatParameters } from './errorHandling';

export default async function format(
  sourceFile: string,
  targetFile: string,
  options: string,
): Promise<MagickResponse> {
  checkFormatParameters(sourceFile, targetFile);
  const execAsync = util.promisify(exec);
  const { stdout, stderr } = await execAsync(
    `${imageMagickCmd} convert ${sourceFile} ${targetFile} ${options}`,
  );
  if (stderr) {
    throw TypeError(stderr);
  }
  return {
    success: true,
    output: stdout,
  };
}
