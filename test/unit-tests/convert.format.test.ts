import 'jest';
import { convert } from '../../src/commands/convert';

describe('ConvertFormat', () => {
  const convertExpectedResult = {
    output: expect.any(String),
    success: expect.any(Boolean),
  };
  const imagePath = `${process.cwd()}\\test\\images\\`;
  const sourceFile = `${imagePath}good.jpg`;
  const targetFile = `${imagePath}target.jpg`;
  const unexistingFile = `${imagePath}unexisting.jpg`;

  it('should return format object output', async () => {
    const formatGoodParams = {
      sourceFile,
      targetFile,
    };
    const result = await convert.format(formatGoodParams);
    expect(result).toEqual(expect.objectContaining(convertExpectedResult));
  });
  it('should throw parameter is empty', async () => {
    const formatMissingParams = {
      sourceFile: '',
      targetFile,
    };
    await expect(convert.format(formatMissingParams)).rejects.toThrow(
      'sourceFile parameter is empty',
    );
  });
  it('should throw cannot find file', async () => {
    const sourceFileMissingParams = {
      sourceFile: unexistingFile,
      targetFile,
    };
    await expect(convert.format(sourceFileMissingParams)).rejects.toThrow(
      `cannot find file ${unexistingFile}`,
    );
  });
});
