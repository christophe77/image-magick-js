import 'jest';
import { convert } from '../../src/commands/convert';

describe('ConvertResize', () => {
  const convertExpectedResult = {
    output: expect.any(String),
    success: expect.any(Boolean),
  };
  const imagePath = `${process.cwd()}\\test\\images\\`;
  const sourceFile = `${imagePath}good.jpg`;
  const unexistingFile = `${imagePath}unexisting.jpg`;
  const targetFile = `${imagePath}target.jpg`;

  it('should return resize object output', async () => {
    const resizeGoodParams = {
      sourceFile,
      resize: '800x600',
      targetFile,
      force: true,
    };
    const result = await convert.resize(resizeGoodParams);
    expect(result).toEqual(expect.objectContaining(convertExpectedResult));
  });
  it('should throw parameter is missing', async () => {
    const resizeMissingParams = {
      sourceFile: '',
      resize: '',
      targetFile: '',
      force: true,
    };
    await expect(convert.resize(resizeMissingParams)).rejects.toThrow(
      'sourceFile property is missing',
    );
  });
  it('should throw parameter is missing', async () => {
    const sourceFileMissingParams = {
      sourceFile: unexistingFile,
      resize: '800x600',
      targetFile,
      force: true,
    };
    await expect(convert.resize(sourceFileMissingParams)).rejects.toThrow(
      `cannot find file ${unexistingFile}`,
    );
  });
});
