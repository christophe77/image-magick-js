import 'jest';
import identify from '../../src/commands/identify';

describe('Identify', () => {
  const identifyExpectedResult = {
    filename: expect.any(String),
    imageFormat: expect.any(String),
    widthXheight: expect.any(String),
    pageWidthXpageHeightXoffsetYoffset: expect.any(String),
    colorspace: expect.any(String),
    weight: expect.any(String),
    userTime: expect.any(String),
    elapsedTime: expect.any(String),
    error: expect.any(String),
  };
  const imagePath = `${process.cwd()}\\test\\images\\`;
  const goodImageFile = `${imagePath}good.jpg`;
  const corruptedImageFile = `${imagePath}corrupted.png`;
  const incorrectImagePath = 'test.png';
  const emptyImagePath = '';

  it('should return object output', async () => {
    const result = await identify(goodImageFile);
    expect(result).toEqual(expect.objectContaining(identifyExpectedResult));
  });
  it('should throw file argument is missing', async () => {
    await expect(identify(emptyImagePath)).rejects.toThrow(
      'file argument is missing',
    );
  });
  it('should throw cannot find file error message', async () => {
    await expect(identify(incorrectImagePath)).rejects.toThrow(
      'cannot find file test.png',
    );
  });
  it('should throw corrupted file error message', async () => {
    await expect(identify(corruptedImageFile)).rejects.toThrow(
      'file is corrupted or not image file',
    );
  });
});
