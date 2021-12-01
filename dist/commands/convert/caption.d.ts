import { MagickResponse } from './types';
export default function resize(targetFile: string, caption: string, pointSize: number, size: string, gravity: string): Promise<MagickResponse>;
