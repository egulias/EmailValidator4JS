"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_1 = require("../lib/lexer");
test('this is a test', function () {
    expect(lexer_1.tokenize('lll')).toEqual([]);
});
