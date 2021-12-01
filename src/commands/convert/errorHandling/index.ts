import fs from 'fs';
import { ResizeParams, FormatParams, CaptionParams } from '../types';

export function checkResizeParameters(params: ResizeParams): void {
  const { targetFile, sourceFile, resize } = params;
  if (!sourceFile || sourceFile === '') {
    throw TypeError('sourceFile property is missing');
  }
  if (!fs.existsSync(sourceFile)) {
    throw TypeError(`cannot find file ${sourceFile}`);
  }
  if (!resize || resize === '') {
    throw TypeError('resize property is missing');
  }
  if (targetFile && !fs.existsSync(targetFile)) {
    throw TypeError(`cannot find file ${targetFile}`);
  }
}

export function checkCaptionParameters(params: CaptionParams): void {
  const { caption, targetFile } = params;
  if (!caption || caption === '') {
    throw TypeError('caption property is missing');
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('targetFile property is missing');
  }
}

export function checkFormatParameters(params: FormatParams): void {
  const { targetFile, sourceFile } = params;
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
