import util from 'util';
import { exec } from 'child_process';
import { imageMagickCmd } from '../../utils/constants';
import { Custom } from './types';
import { checkCustomParameters } from './errorHandling';

export default async function custom(options: string): Promise<Custom> {
  checkCustomParameters(options);
  const execAsync = util.promisify(exec);
  const { stdout } = await execAsync(`${imageMagickCmd} ${options}`);

  return {
    output: stdout,
  };
}
