'use strict'

const { zellerCon } = require('./zeller');
const { argCount } = require('./parse-args.js');
const { monthMaker } = require('./month-maker.js');
const { buildFullYear } = require('./quarters.js');
const { monthBuilder } = require('./cal-builder.js');

const [,,...args] = process.argv;

let year;
let month;
const d = new Date; 

switch (args.length) {
    case 2:
        // args.length === 2;
        console.log("sheeee")
        year = args[1];
        month = args[0];
        console.log(monthBuilder(year, month, true));
        break;
    case 1: 
        console.log("funeral")
        year = args[0]
        console.log(buildFullYear(year));
        break;
    default: 
        month = d.getMonth() + 1;
        year = d.getFullYear();
        console.log(monthBuilder(year, month));
        break;
};

 