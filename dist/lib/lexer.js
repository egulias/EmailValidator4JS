"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = void 0;
function tokenize(str) {
    var regex = /[^\x00-\x7F]/gu;
    // add runtime check for use in JavaScript
    if (typeof str !== 'string') {
        return [];
    }
    return [];
}
exports.tokenize = tokenize;
