import fs from 'fs';

export function checkIdentifyParameters(file: string): void {
  if (!file || file === '') {
    throw TypeError('file argument is missing');
  }
  if (!fs.existsSync(file)) {
    throw TypeError(`cannot find file ${file}`);
  }
}