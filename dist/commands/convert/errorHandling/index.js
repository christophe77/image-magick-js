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
    const { sourceFile, resize } = params;
    if (!sourceFile || sourceFile === '') {
        throw TypeError('sourceFile parameter is empty');
    }
    if (!fs_1.default.existsSync(sourceFile)) {
        throw TypeError(`cannot find file ${sourceFile}`);
    }
    if (!resize || resize === '') {
        throw TypeError('resize parameter is empty');
    }
}
exports.checkResizeParameters = checkResizeParameters;
function checkCaptionParameters(params) {
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
exports.checkCaptionParameters = checkCaptionParameters;
function checkFormatParameters(params) {
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
    if (!fs_1.default.existsSync(sourceFile)) {
        throw TypeError(`cannot find file ${sourceFile}`);
    }
}
exports.checkFormatParameters = checkFormatParameters;
