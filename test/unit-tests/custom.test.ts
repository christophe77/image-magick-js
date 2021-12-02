import 'jest';
import custom from '../../src/commands/custom';

describe('Custom', () => {

  const customExpectedResult = {
    output: expect.any(String),
  };
  const imagePath = `${process.cwd()}\\test\\images\\`;
  const imageFile = `${imagePath}good.jpg`;

  it('should return object output', async () => {
    const result = await custom(`identify ${imageFile}`);
    expect(result).toEqual(expect.objectContaining(customExpectedResult));
  });
  it('should throw parameter is missing', async () => {
    await expect(custom("")).rejects.toThrow(
      'options cannot be empty',
    );
  });
  it('should throw an error message', async () => {
    await expect(custom("invalid command")).rejects.toThrow(
      'invalid command',
    );
  });
});
