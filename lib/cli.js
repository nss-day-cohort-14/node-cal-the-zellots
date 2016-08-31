'use strict'

const { zellerCon } = require('./zeller');
const { argCount } = require('./parse-args.js');
const { monthMaker } = require('./month-maker.js')

const [,,...args] = process.argv;