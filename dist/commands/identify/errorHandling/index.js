"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdentifyParameters = void 0;
const fs_1 = __importDefault(require("fs"));
function checkIdentifyParameters(file) {
    if (!file || file === '') {
        throw TypeError('file argument is missing');
    }
    if (!fs_1.default.existsSync(file)) {
        throw TypeError(`cannot find file ${file}`);
    }
}
exports.checkIdentifyParameters = checkIdentifyParameters;
