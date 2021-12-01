import util from 'util';
import fs from 'fs';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../core/core';
import { MagickResponse, FormatParams } from './types';
import { checkFormatParameters } from './errorHandling';

export default async function format(
  params: FormatParams,
): Promise<MagickResponse> {
  checkFormatParameters(params);
  const { targetFile, sourceFile } = params;
  
  if (!fs.existsSync(targetFile)) {
    fs.closeSync(fs.openSync(targetFile, 'w'));
  }
  const execAsync = util.promisify(exec);
  const { stdout, stderr } = await execAsync(
    `${imageMagickCmd} convert ${sourceFile} ${targetFile}`,
  );
  if (stderr) {
    throw TypeError(stderr);
  }
  return {
    success: true,
    output: stdout,
  };
}
