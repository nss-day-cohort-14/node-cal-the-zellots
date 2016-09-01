const { assert: { isFunction, strictEqual } } = require('chai');
const { monthBuilder, sixer } = require('../lib/cal-builder');

describe('monthBuilder', () => {
    it('should be a function', () => {
        isFunction(monthBuilder)
    });
    it.skip('should add all days and line breaks for a given month', () => {
        let expected = '    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n\n';
        strictEqual(monthBuilder(2016, 8), expected)
    });
    it('should work for june 2016', () => {
        let expected = "          1  2  3  4 \n 5  6  7  8  9 10 11 \n12 13 14 15 16 17 18 \n19 20 21 22 23 24 25 \n26 27 28 29 30 \n\n";
        strictEqual(monthBuilder(2016, 6), expected);
    });
    it('should work for sept 2016', () => {
        let expected = "             1  2  3 \n 4  5  6  7  8  9 10 \n11 12 13 14 15 16 17 \n18 19 20 21 22 23 24 \n25 26 27 28 29 30 \n\n"
        strictEqual(monthBuilder(2016, 9), expected)
    })
})

describe('sixer', () => {
    it('should be a function', () => {
        isFunction(sixer)
    });
    it('given 4 line breaks, it should add 2 line breaks for a total of 6', () => {
        const lineTest = "a \n b \n c \n d \n e";
        const expected = "a \n b \n c \n d \n e\n\n";
        strictEqual(sixer(lineTest), expected)
    });
})