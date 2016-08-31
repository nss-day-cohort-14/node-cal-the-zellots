'use strict'

const { zellerCon } = require('./zeller');
const { argCount } = require('./parse-args.js');

const [,,...args] = process.argv;

console.log(argCount(args));