import util from 'util';
import { exec } from 'child_process';
import { Identify } from './types';
import { checkIdentifyParameters } from './errorHandling';
import { imageMagickCmd } from '../../utils/constants';

export default async function identify(
  file: string,
): Promise<Identify | unknown> {
  checkIdentifyParameters(file);
  const execAsync = util.promisify(exec);
  try {
    const { stdout } = await execAsync(`${imageMagickCmd} identify ${file}`);
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
  } catch (e) {
    const message = (e as Error).message;
    throw TypeError(
      message.includes('improper')
        ? 'file is corrupted or not image file'
        : message,
    );
  }
}
