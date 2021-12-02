"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFileIfDoesntExistSync = void 0;
const fs_1 = __importDefault(require("fs"));
function createFileIfDoesntExistSync(file) {
    if (!fs_1.default.existsSync(file)) {
        fs_1.default.closeSync(fs_1.default.openSync(file, 'w'));
        return true;
    }
    return false;
}
exports.createFileIfDoesntExistSync = createFileIfDoesntExistSync;
