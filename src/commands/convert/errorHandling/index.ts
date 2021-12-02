import fs from 'fs';
import { ResizeParams, FormatParams, CaptionParams } from '../types';

export function checkResizeParameters(params: ResizeParams): void {
  if (!params) {
    throw ReferenceError('parameters are required');
  }

  const { sourceFile, resize } = params;

  if (!sourceFile || sourceFile === '') {
    throw TypeError('sourceFile parameter is empty');
  }
  if (!fs.existsSync(sourceFile)) {
    throw TypeError(`cannot find file ${sourceFile}`);
  }
  if (!resize || resize === '') {
    throw TypeError('resize parameter is empty');
  }
}

export function checkCaptionParameters(params: CaptionParams): void {
  if (!params) {
    throw ReferenceError('parameters are required');
  }

  const { caption, targetFile } = params;

  if (!caption || caption === '') {
    throw TypeError('caption parameter is empty');
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('targetFile parameter is empty');
  }
}

export function checkFormatParameters(params: FormatParams): void {
  if (!params) {
    throw ReferenceError('parameters are required');
  }

  const { targetFile, sourceFile } = params;

  if (!sourceFile || sourceFile === '') {
    throw TypeError('sourceFile parameter is empty');
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('targetFile parameter is empty');
  }
  if (!fs.existsSync(sourceFile)) {
    throw TypeError(`cannot find file ${sourceFile}`);
  }
}
