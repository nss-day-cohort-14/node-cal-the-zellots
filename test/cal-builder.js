const { assert: { isFunction, strictEqual, equal } } = require('chai');
const { monthBuilder, sixer, monthBuilderOne } = require('../lib/cal-builder');
const { exec } = require('child_process');
const { buildFullYear } = require('../lib/quarters.js');

describe('monthBuilder', () => {
    it('should be a function', () => {
        isFunction(monthBuilder)
    });
    it.skip('should add all days and line breaks for a given month', () => {
        let expected = '    1  2  3  4  5  6\n 7  8  9 10 11 12 13\n14 15 16 17 18 19 20\n21 22 23 24 25 26 27\n28 29 30 31\n\n';
        strictEqual(monthBuilder(2016, 8), expected)
    });
    it('should work for june 2016', (done) => {
        exec('cal 2016', (err, stdout1) => {
            strictEqual(buildFullYear(2016), stdout1.toString())
            done()
        })
    });
    it('should work for September 2016', (done) => {
        exec('cal 9 2016', (err, stdout1) => {
            strictEqual(monthBuilder(2016, 9), stdout1.toString())
            done()
        })
    });
    it('should work for February 2016', (done) => {
        exec('cal 2 2016', (err, stdout1) => {
            strictEqual(monthBuilder(2016, 2), stdout1.toString())
            done()
        })
    });
    it('should work for February 2014', (done) => {
        exec('cal 2 2014', (err, stdout1) => {
            strictEqual(monthBuilder(2014, 2), stdout1.toString())
            done()
        })
    });
    it.skip('should work for February 2015', (done) => {
        exec('cal 2 2015', (err, stdout1) => {
            strictEqual(monthBuilder(2015, 2), stdout1.toString())
            done()
        })
    });
    it.skip('should work for January 2016', (done) => {
        exec('cal 1 2016', (err, stdout1) => {
            strictEqual(monthBuilder(2016, 1), stdout1.toString())
            done()
        })
    });
    it.skip('should work for February 1900', (done) => {
        exec('cal 2 1900', (err, stdout1) => {
            strictEqual(monthBuilder(1900, 2), stdout1.toString())
            done()
        })
    });
    it.skip('should work for February 2000', (done) => {
        exec('cal 2 2000', (err, stdout1) => {
            strictEqual(monthBuilder(2000, 2), stdout1.toString())
            done()
        })
    });
})

