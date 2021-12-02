import util from 'util';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../utils/constants';
import { createFileIfDoesntExistSync } from '../../utils/files';
import { MagickResponse, FormatParams } from './types';
import { checkFormatParameters } from './errorHandling';

export default async function format(
  params: FormatParams,
): Promise<MagickResponse> {
  checkFormatParameters(params);
  const { targetFile, sourceFile } = params;
  createFileIfDoesntExistSync(targetFile);
  const execAsync = util.promisify(exec);
  const { stdout } = await execAsync(
    `${imageMagickCmd} convert ${sourceFile} ${targetFile}`,
  );
  return {
    success: true,
    output: stdout,
  };
}
