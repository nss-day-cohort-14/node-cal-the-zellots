'use strict'

const { assert: { isFunction, strictEqual } } = require('chai');
const { exec } = require('child_process');
const { argCount } = require('../lib/parse-args');

describe('cli', () => {
    it.skip('should handle 0 arguments', (done) => {
        exec('bin/node-cal', (err, stdout) => {
            strictEqual(stdout, 0)
            done()
        })
    })
})