'use test'

const { assert: { isFunction, strictEqual } } = require('chai');
const { exec } = require('child_process');
const { argCount, returnCurrentMonth } = require('../lib/parse-args')


describe('argCount', () => {
    it('should be a function', () => {
        isFunction(argCount);
    });
    it('0 command line arguments should return "0"', () => {
        const args = [];
        strictEqual(argCount(args), 0);
    });
    it('1 command line argument should return "1"', () => {
        const args = [1];
        strictEqual(argCount(args), 1);
    });
    it('2 command line arguments should return "2"', () => {
        const args = [1, 23];
        strictEqual(argCount(args), 2)
    });
});

describe('returnCurrentMonth', () => {
    it('should be a function', () => {
        isFunction(returnCurrentMonth)
    });
})