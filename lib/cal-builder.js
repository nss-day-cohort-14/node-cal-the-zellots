'use strict';

const { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth, months, chopLastSpace } = require('./month-maker');
const { zellerCon, modMonth, modYear } = require('../lib/zeller');
const { argCount, returnCurrentMonth } = require('./parse-args');

const allMonths = months;

const sixer = (str) => {
    let lineCount = str.split('\n').length - 1;
    let newLine = "\n"
    return str += (newLine.repeat(6 - lineCount))
};

const calConcat = (year, month, str) => {
    
    let finalCal = ''
    finalCal += monthHeader(year, month);
    finalCal += dayString();
    finalCal += str

    return finalCal
};

const monthBuilder = (year, month) => {

    const isLeapYear = leapYear(year);
    let firstDay = firstOfTheMonth(year, month);
    const space = " ";
    let emptySpaces = space.repeat(3 * (firstDay - 1));
   
    let days = allMonths[month -1].days;
    let str = `${emptySpaces}`;
    let firstBreak;
   
    if (isLeapYear && month === 2) { days += 1};

    for (let i = 1; i <= days; i ++){
    
        if(((str.length % 21) === 0 && i <= 8 && str.length > 0)
            || ((i - firstBreak) % 7 === 0)) {
            str += `\n${zeroSpacer(i)} `;
            firstBreak = i
        } else {
            str += `${zeroSpacer(i)} `
        }
    }

    return calConcat(year, month, sixer(chopLastSpace(str)))
}; 


module.exports = { monthBuilder, sixer }