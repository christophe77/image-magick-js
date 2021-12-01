import fs from 'fs';

export function checkResizeParameters(
  sourceFile: string,
  targetFile: string,
  resize: string,
): void {
  if (!sourceFile || sourceFile === '') {
    throw TypeError('sourceFile property is missing');
  }
  if (!fs.existsSync(sourceFile)) {
    throw TypeError(`cannot find file ${sourceFile}`);
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('targetFile property is missing');
  }
  if (!resize || resize === '') {
    throw TypeError('resize property is missing');
  }
}

export function checkCaptionParameters(
  targetFile: string,
  caption: string,
): void {
  if (!caption || caption === '') {
    throw TypeError('caption property is missing');
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('targetFile property is missing');
  }
}

export function checkFormatParameters(
  sourceFile: string,
  targetFile: string,
): void {
  if (!sourceFile || sourceFile === '') {
    throw TypeError('sourceFile cannot be empty');
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('sourceFile cannot be empty');
  }
  if (!fs.existsSync(sourceFile)) {
    throw TypeError(`cannot find file ${sourceFile}`);
  }
  if (!fs.existsSync(targetFile)) {
    throw TypeError(`cannot find file ${targetFile}`);
  }
}
