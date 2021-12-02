import fs from 'fs';

export function createFileIfDoesntExistSync(file: string): boolean {
  if (!fs.existsSync(file)) {
    fs.closeSync(fs.openSync(file, 'w'));
    return true;
  }
  return false;
}
