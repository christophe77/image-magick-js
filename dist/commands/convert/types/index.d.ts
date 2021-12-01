export declare type MagickResponse = {
    success: boolean;
    output: string;
};
export declare type Convert = {
    resize: (sourceFile: string, targetFile: string, resize: string, force: boolean) => Promise<MagickResponse>;
    format: (sourceFile: string, targetFile: string, options: string) => Promise<MagickResponse>;
    caption: (targetFile: string, caption: string, pointSize: number, size: string, gravity: string) => Promise<MagickResponse>;
};
