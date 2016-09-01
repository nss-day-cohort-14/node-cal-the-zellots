'use strict';

const { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth, months } = require('./month-maker');
const { zellerCon, modMonth, modYear } = require('../lib/zeller');
const { argCount, returnCurrentMonth } = require('./parse-args');

const allMonths = months;

const monthBuilder = (year, month) => {
    let firstDay = firstOfTheMonth(year, month);
    const space = " ";
    let emptySpaces = space.repeat(3 * (firstDay - 1));
    let days = allMonths[month -1].days;
    let str = `${emptySpaces}`;
    let firstBreak;

    for (let i = 1; i <= days; i ++){

            console.log(str.length)
            console.log(str)

            if(((str.length % 21) === 0 &&
            i <= 7
            )
            || (i - firstBreak) % 7 === 0) {
                str += `\n${zeroSpacer(i)} `;
                firstBreak = i
            } else {
                str += `${zeroSpacer(i)} `
            }
        }
    return str + "\n\n"
}; 

console.log(monthBuilder(2016,8));

module.exports = { monthBuilder }