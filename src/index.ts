import identify from './commands/identify';
import { convert } from './commands/convert';
import custom from './commands/custom';

const magick = {
  identify,
  convert,
  custom,
};
module.exports = magick;
