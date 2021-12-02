import 'jest';
import { convert } from '../../src/commands/convert';

describe('ConvertCaption', () => {
  const convertExpectedResult = {
    output: expect.any(String),
    success: expect.any(Boolean),
  };
  const imagePath = `${process.cwd()}\\test\\images\\`;
  const targetFile = `${imagePath}caption.png`;
  const pointSize = 36;
  const size = '800x600';
  const gravity = 'Center';
  const caption = 'hello world';

  it('should return caption object output', async () => {
    const captionGoodParams = {
      targetFile,
      pointSize,
      size,
      gravity,
      caption,
    };
    const result = await convert.caption(captionGoodParams);
    expect(result).toEqual(expect.objectContaining(convertExpectedResult));
  });
  it('should throw an error message', async () => {
    const captionBadParams = {
      targetFile:"",
      pointSize:-99,
      size:"error",
      gravity:"error",
      caption:"error",
    };
    await expect(convert.caption(captionBadParams)).rejects.toThrow(
      'targetFile parameter is empty',
    );
  });
});
