'use strict';

const { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth, months, chopLastSpace } = require('./month-maker');
const { zellerCon, modMonth, modYear } = require('../lib/zeller');
const { argCount, returnCurrentMonth } = require('./parse-args');

const allMonths = months;

// const sixer = (str) => {
//     let lineCount = str.split('\n').length - 1;
//     let newLine = "\n"
//     return str += (newLine.repeat(6 - lineCount))
// };

const calConcat = (year, month, str, bool) => {
    
    let finalCal = ''
    finalCal += monthHeader(year, month, bool);
    // finalCal += dayString();
    finalCal += str

    return finalCal
};

const monthBuilder = (year, month, bools = true) => {

    const isLeapYear = leapYear(year);
    let firstDay = firstOfTheMonth(year, month);
    const space = " ";
    let emptySpaces = space.repeat(3 * (firstDay - 1));
   
    let str = dayString();
    let days = allMonths[month -1].days;
    str += `${emptySpaces}`;

    let dayCounter = firstDay;
    let weekCounter = 1;


    if (isLeapYear && month === 2) { days += 1};

      // refactor this loop

    for (let i = 1; i <= days; i ++){
        str += `${zeroSpacer(i)}`

        if (i < days) { 
            if (dayCounter < 7) { str += " "}
            else {  str += `\n`;  
                    dayCounter = 0; 
                    weekCounter++;
            }; 
            dayCounter++;
        };
    };

    //Add padding on last line for multi-month

const MAX_WEEKS = 6;

    if(!bools){
        if (dayCounter < 7 ) {
            str += space.repeat(((7 - dayCounter)*3));
        } 
         str += `\n`;
        for (let i = 0; i < MAX_WEEKS - weekCounter; i++) {
            str += space.repeat(20);
            if ( weekCounter < MAX_WEEKS ) {
                 str += `\n`;
            }
        }
    };

    if(bools) {
        str += `\n\n`
    }

    return calConcat(year, month, str, bools)
}; 


module.exports = { monthBuilder };
