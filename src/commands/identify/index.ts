import util from 'util';
import { exec } from 'child_process';
import { Identify } from './types';
import { checkIdentifyParameters } from './errorHandling';
import { imageMagickCmd } from '../../core/core';

export default async function identify(
  file: string,
): Promise<Identify> {
  checkIdentifyParameters(file);
  const execAsync = util.promisify(exec);

  const { stdout, stderr } = await execAsync(
    `${imageMagickCmd} identify ${file}`,
  );
  if (stderr) {
    throw TypeError(stderr);
  }
  return {
    filename: stdout.split(' ')[0],
    imageFormat: stdout.split(' ')[1],
    widthXheight: stdout.split(' ')[2],
    pageWidthXpageHeightXoffsetYoffset: stdout.split(' ')[3],
    colorspace: `${stdout.split(' ')[4]} ${stdout.split(' ')[5]}`,
    weight: stdout.split(' ')[6],
    userTime: stdout.split(' ')[7],
    elapsedTime: stdout.split(' ')[8].replace('\r\n', ''),
    error: '',
  };
}
