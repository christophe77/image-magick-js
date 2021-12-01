"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const resize_1 = __importDefault(require("./resize"));
const format_1 = __importDefault(require("./format"));
const caption_1 = __importDefault(require("./caption"));
exports.convert = {
    resize: resize_1.default,
    format: format_1.default,
    caption: caption_1.default,
};
