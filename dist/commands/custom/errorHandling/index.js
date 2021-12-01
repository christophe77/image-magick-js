"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCustomParameters = void 0;
function checkCustomParameters(options) {
    if (!options || options === '') {
        throw TypeError('options cannot be empty');
    }
}
exports.checkCustomParameters = checkCustomParameters;
