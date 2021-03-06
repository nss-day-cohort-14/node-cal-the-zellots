'use strict';

const { assert: { isFunction, strictEqual } } = require('chai');
const { exec } = require('child_process');
const { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth, chopLastSpace } = require('../lib/month-maker');

describe('monthHeader', () => {
    it('should be a function', () => {
        isFunction(monthHeader)
    });
    it('8 2016 should return "August 2016', () => {
        strictEqual(monthHeader(2016, 8), "    August 2016\n")
    })
})

describe('dayString', () => {
    it('should be a function', () => {
        isFunction(dayString);
    });
    it('Should return a string of the first two letters of each day', () => {
        const expected = "Su Mo Tu We Th Fr Sa\n";
        strictEqual(dayString(), expected)
    });
})

describe('zeroSpacer', () => {
    it('should be a function', () => {
        isFunction(zeroSpacer)
    });
    it('should return a space and a number with a single digit', () => {
        strictEqual(zeroSpacer(0), " 0");
    });
    it('should return just the numbers as a string with two digits', () => {
        strictEqual(zeroSpacer(21), "21")
    })
})

describe('leapYear', () => {
    it('should be a function', () => {
        isFunction(leapYear)
    });
    it('should return true if year is a leap year', () => {
        strictEqual(leapYear(2000), true)
    })
    it('should return false if year is a leap year', () => {
        strictEqual(leapYear(2015), false)
    })
})

describe('firstOfTheMonth', () => {
    it('should be a function', () => {
        isFunction(firstOfTheMonth)
    });
    it('should determine what day the 1st of a given month begins on', () => {
        strictEqual(firstOfTheMonth(2016, 1), 6)
    })
    it.skip('should return false if year is a leap year', () => {
        strictEqual(leapYear(2015), false)
    })
});

describe('chopLastSpace', () => {
    it('should be a function', () => {
        isFunction(chopLastSpace)
    });
    it('should remove the the blank spaces before a line break in a string', () => {
        const expected = "a\n b\n";
        const original = "a \n b \n";
        strictEqual(chopLastSpace(original), expected)
    })
}) 