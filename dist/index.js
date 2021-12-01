"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const identify_1 = __importDefault(require("./commands/identify"));
const convert_1 = require("./commands/convert");
const custom_1 = __importDefault(require("./commands/custom"));
const magick = {
    identify: identify_1.default,
    convert: convert_1.convert,
    custom: custom_1.default,
};
module.exports = magick;
