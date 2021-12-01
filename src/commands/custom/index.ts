import util from 'util';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../core/core';
import { Custom } from './types';
import { checkCustomParameters } from './errorHandling';

export default async function custom(options: string): Promise<Custom> {
  checkCustomParameters(options);
  const execAsync = util.promisify(exec);
  const { stdout, stderr } = await execAsync(`${imageMagickCmd} ${options}`);
  if (stderr) {
    throw TypeError(stderr);
  }
  return {
    output: stdout,
  };
}
