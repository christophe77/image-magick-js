"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
const core_1 = require("../../core/core");
const errorHandling_1 = require("./errorHandling");
function caption(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            (0, errorHandling_1.checkCaptionParameters)(params);
            const { targetFile, pointSize, size, gravity, caption } = params;
            const execAsync = util_1.default.promisify(child_process_1.exec);
            if (!fs_1.default.existsSync(targetFile)) {
                fs_1.default.closeSync(fs_1.default.openSync(targetFile, 'w'));
            }
            const pointSizeOption = ((pointSize === null || pointSize === void 0 ? void 0 : pointSize.toString()) !== '' && `-pointsize ${pointSize}`) || '';
            const sizeOption = (size && size !== '' && `-size ${size}`) || '';
            const gravityOption = (gravity && gravity !== '' && `-gravity ${gravity}`) || '';
            const { stdout, stderr } = yield execAsync(`${core_1.imageMagickCmd} convert ${pointSizeOption} ${sizeOption} ${gravityOption} caption:"${caption}" ${targetFile}`);
            if (stderr) {
                throw TypeError(stderr);
            }
            return {
                success: true,
                output: stdout,
            };
        }
        catch (e) {
            throw TypeError(e.message);
        }
    });
}
exports.default = caption;
