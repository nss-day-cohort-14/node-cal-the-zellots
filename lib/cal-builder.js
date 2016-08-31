'use strict';

const { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth } = require('./month-maker');
const { zellerCon, modMonth, modYear } = require('../lib/zeller');
const { argCount, returnCurrentMonth } = require('./parse-args');

const monthBuilder = (year, month) => {
    let firstDay = firstOfTheMonth(year, month);
    const space = "*";
    let emptySpaces = space.repeat(3 * (firstDay - 1));
    console.log(emptySpaces)
}; 
