const { assert: { isFunction, strictEqual } } = require('chai');
const { monthBuilder } = require('../lib/cal-builder');

describe('monthBuilder', () => {
    it('should be a function', () => {
        isFunction(monthBuilder)
    });
    it('should add all days and line breaks for a given month', () => {
        let expected = '    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n\n'
        strictEqual(monthBuilder(2016, 8), expected)
    })
})