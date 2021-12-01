export type MagickResponse = {
  success: boolean;
  output: string;
};
export type ResizeParams = {
  sourceFile: string;
  resize: string;
  targetFile: string;
  force: boolean;
};
export type FormatParams = {
  sourceFile: string;
  targetFile: string;
};
export type CaptionParams = {
  targetFile: string;
  caption: string;
  pointSize: number;
  size: string;
  gravity: string;
};
export type Convert = {
  resize: (params: ResizeParams) => Promise<MagickResponse>;
  format: (params: FormatParams) => Promise<MagickResponse>;
  caption: (params: CaptionParams) => Promise<MagickResponse>;
};
