import identify from './commands/identify';
import { convert } from './commands/convert';
import custom from './commands/custom';

const commands = {
  identify,
  convert,
  custom,
};
exports.cmds = commands;
