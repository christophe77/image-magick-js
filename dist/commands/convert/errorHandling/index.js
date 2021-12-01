"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFormatParameters = exports.checkCaptionParameters = exports.checkResizeParameters = void 0;
const fs_1 = __importDefault(require("fs"));
function checkResizeParameters(sourceFile, targetFile, resize) {
    if (!sourceFile || sourceFile === '') {
        throw TypeError('sourceFile property is missing');
    }
    if (!fs_1.default.existsSync(sourceFile)) {
        throw TypeError(`cannot find file ${sourceFile}`);
    }
    if (!targetFile || targetFile === '') {
        throw TypeError('targetFile property is missing');
    }
    if (!resize || resize === '') {
        throw TypeError('resize property is missing');
    }
}
exports.checkResizeParameters = checkResizeParameters;
function checkCaptionParameters(targetFile, caption) {
    if (!caption || caption === '') {
        throw TypeError('caption property is missing');
    }
    if (!targetFile || targetFile === '') {
        throw TypeError('targetFile property is missing');
    }
}
exports.checkCaptionParameters = checkCaptionParameters;
function checkFormatParameters(sourceFile, targetFile) {
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
