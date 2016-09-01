const { assert: { isFunction, strictEqual, equal } } = require('chai');
const { monthBuilder, sixer } = require('../lib/cal-builder');
const { exec } = require('child_process');

describe('monthBuilder', () => {
    it('should be a function', () => {
        isFunction(monthBuilder)
    });
    it.skip('should add all days and line breaks for a given month', () => {
        let expected = '    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n\n';
        strictEqual(monthBuilder(2016, 8), expected)
    });
    it('should work for june 2016', (done) => {
        // let expected = "          1  2  3  4 \n 5  6  7  8  9 10 11 \n12 13 14 15 16 17 18 \n19 20 21 22 23 24 25 \n26 27 28 29 30 \n\n";
        exec('cal 6 2016', (err, stdout1) => {
            strictEqual(monthBuilder(2016, 6), stdout1.toString())
            done()
        })
        // strictEqual(monthBuilder(2016, 6), expected);
    });



    it.skip('should work for sept 2016', () => {
        let expected = "             1  2  3 \n 4  5  6  7  8  9 10 \n11 12 13 14 15 16 17 \n18 19 20 21 22 23 24 \n25 26 27 28 29 30 \n\n"
        strictEqual(monthBuilder(2016, 9), expected)
    });
    it.skip('should work for feb 2016', () => {
        let expected = "    1  2  3  4  5  6 \n 7  8  9 10 11 12 13 \n14 15 16 17 18 19 20 \n21 22 23 24 25 26 27 \n28 29 \n\n";
        strictEqual(monthBuilder(2016, 2), expected)
    });
    it.skip('should work for feb 2014', () => {
    
        let expected = "                   1 \n 2  3  4  5  6  7  8 \n 9 10 11 12 13 14 15 \n16 17 18 19 20 21 22 \n23 24 25 26 27 28 \n\n"
        equal(monthBuilder(2014, 2), expected)
    });
    it.skip('should work for novmber 2014', () => {
        let expected = "                   1 \n 2  3  4  5  6  7  8 \n 9 10 11 12 13 14 15 \n16 17 18 19 20 21 22 \n23 24 25 26 27 28 29 \n30 \n"
        strictEqual(monthBuilder(2014, 11), expected)
    });
    it.skip('should work for november 2015', () => {
        let expected = " 1  2  3  4  5  6  7 \n 8  9 10 11 12 13 14 \n15 16 17 18 19 20 21 \n22 23 24 25 26 27 28 \n29 30 \n\n"
        strictEqual(monthBuilder(2015, 11), expected)
    });
    it.skip('should work for january 2016', () => {
        let expected = "                1  2 \n 3  4  5  6  7  8  9 \n10 11 12 13 14 15 16 \n17 18 19 20 21 22 23 \n24 25 26 27 28 29 30 \n31 \n"
        strictEqual(monthBuilder(2016, 1), expected)
    });
     it.skip('should work for febuary 1900', () => {
        let expected = "             1  2  3 \n 4  5  6  7  8  9 10 \n11 12 13 14 15 16 17 \n18 19 20 21 22 23 24 \n25 26 27 28 \n\n"
        strictEqual(monthBuilder(1900, 2), expected)
    });
     it.skip('should work for febuary 2000', () => {
        let expected = "       1  2  3  4  5 \n 6  7  8  9 10 11 12 \n13 14 15 16 17 18 19 \n20 21 22 23 24 25 26 \n27 28 29 \n\n"
        strictEqual(monthBuilder(2000, 2), expected)
    });
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