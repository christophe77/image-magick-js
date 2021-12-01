"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFormatParameters = exports.checkCaptionParameters = exports.checkResizeParameters = void 0;
const fs_1 = __importDefault(require("fs"));
function checkResizeParameters(params) {
    if (!params) {
        throw ReferenceError('parameters are required');
    }
    const { targetFile, sourceFile, resize } = params;
    if (!sourceFile || sourceFile === '') {
        throw TypeError('sourceFile property is missing');
    }
    if (!fs_1.default.existsSync(sourceFile)) {
        throw TypeError(`cannot find file ${sourceFile}`);
    }
    if (!resize || resize === '') {
        throw TypeError('resize property is missing');
    }
    if (targetFile && !fs_1.default.existsSync(targetFile)) {
        throw TypeError(`cannot find file ${targetFile}`);
    }
}
exports.checkResizeParameters = checkResizeParameters;
function checkCaptionParameters(params) {
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
exports.checkCaptionParameters = checkCaptionParameters;
function checkFormatParameters(params) {
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
    if (!fs_1.default.existsSync(sourceFile)) {
        throw TypeError(`cannot find file ${sourceFile}`);
    }
    if (!fs_1.default.existsSync(targetFile)) {
        throw TypeError(`cannot find file ${targetFile}`);
    }
}
exports.checkFormatParameters = checkFormatParameters;
