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
const child_process_1 = require("child_process");
const errorHandling_1 = require("./errorHandling");
const constants_1 = require("../../utils/constants");
function identify(file) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, errorHandling_1.checkIdentifyParameters)(file);
        const execAsync = util_1.default.promisify(child_process_1.exec);
        try {
            const { stdout } = yield execAsync(`${constants_1.imageMagickCmd} identify ${file}`);
            return {
                filename: stdout.split(' ')[0],
                imageFormat: stdout.split(' ')[1],
                widthXheight: stdout.split(' ')[2],
                pageWidthXpageHeightXoffsetYoffset: stdout.split(' ')[3],
                colorspace: `${stdout.split(' ')[4]} ${stdout.split(' ')[5]}`,
                weight: stdout.split(' ')[6],
                userTime: stdout.split(' ')[7],
                elapsedTime: stdout.split(' ')[8].replace('\r\n', ''),
                error: '',
            };
        }
        catch (e) {
            const message = e.message;
            throw TypeError(message.includes('improper')
                ? 'file is corrupted or not image file'
                : message);
        }
    });
}
exports.default = identify;
