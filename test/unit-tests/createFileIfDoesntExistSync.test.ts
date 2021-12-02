import 'jest';
import fs from 'fs';
import { createFileIfDoesntExistSync } from '../../src/utils/files';

describe('CreateFile', () => {
  const imagePath = `${process.cwd()}\\test\\images\\`;
  const existingFile = `${imagePath}good.jpg`;
  const unexistingImage = `${imagePath}test123.jpg`;

  afterEach(() => {
    fs.unlink(unexistingImage, err => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
  it('should return true', () => {
    const result = createFileIfDoesntExistSync(unexistingImage);
    expect(result).toBe(true);
  });
  it('should return false', () => {
    const result = createFileIfDoesntExistSync(existingFile);
    expect(result).toBe(false);
  });
});
