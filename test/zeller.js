'use strict'

const { assert: {isFunction, oneOf, strictEqual} } = require('chai');

const { zellerCon, modMonth, modYear } = require('../lib/zeller');

describe('modMonth', () => {
    it('should be a function', () => {
        isFunction(modMonth)
    });
    it('1 should return 13', () => {
        strictEqual(modMonth(1), 13)
    });
    it('2 should return 14', () => {
        strictEqual(modMonth(2), 14);
    })
});

describe('modYear', () => {
    it('should be a function', () => {
        isFunction(modYear);
    });
    it('(2011, 1) should return 2010', () => {
        strictEqual(modYear(2011, 1), 2010 )
    });
     it('(2018, 2) should return 2017', () => {
        strictEqual(modYear(2018, 2), 2017 )
    });
    it('(2019, 3) should return 2019', () => {
        strictEqual(modYear(2019, 3), 2019)
    })
})


describe('zellerCon', () => {
    it('should be a function', () => {
        isFunction(zellerCon);
    });
    it('should return a number between 1 & 7', () => {
        const expected = [1,2,3,4,5,6,7]        
        oneOf(zellerCon(2016, 1, 1), expected)
    });
    it('(2016, 1, 1) should return 5', () => {
        strictEqual(zellerCon(2016, 1, 1), 6)
    })
});