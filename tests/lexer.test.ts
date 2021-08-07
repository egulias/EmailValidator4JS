import { tokenize } from '../lib/lexer';

test('this is a test', () => {
    expect(tokenize('lll')).toEqual([])
})