export declare type MagickResponse = {
    success: boolean;
    output: string;
};
export declare type ResizeParams = {
    sourceFile: string;
    resize: string;
    targetFile: string;
    force: boolean;
};
export declare type FormatParams = {
    sourceFile: string;
    targetFile: string;
};
export declare type CaptionParams = {
    targetFile: string;
    caption: string;
    pointSize: number;
    size: string;
    gravity: string;
};
export declare type Convert = {
    resize: (params: ResizeParams) => Promise<MagickResponse>;
    format: (params: FormatParams) => Promise<MagickResponse>;
    caption: (params: CaptionParams) => Promise<MagickResponse>;
};
