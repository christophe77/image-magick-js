import fs from 'fs';
import { ResizeParams, FormatParams, CaptionParams } from '../types';

export function checkResizeParameters(params: ResizeParams): void {
  if (!params) {
    throw ReferenceError('parameters are required');
  }

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
}

export function checkCaptionParameters(params: CaptionParams): void {
  if (!params) {
    throw ReferenceError('parameters are required');
  }

  const { caption, targetFile } = params;

  if (!caption || caption === '') {
    throw TypeError('caption property is missing');
  }
  if (!targetFile || targetFile === '') {
    throw TypeError('targetFile property is missing');
  }
}

export function checkFormatParameters(params: FormatParams): void {
  if (!params) {
    throw ReferenceError('parameters are required');
  }

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
