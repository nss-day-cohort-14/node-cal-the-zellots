'use strict'

const { monthBuilder } = require('./cal-builder');
const { dayString } = require('./month-maker')

const LINE_LENGTH = 64;


let createLine = (index, monthArray) => {
    let newString = `${monthArray[0][index]}  ${monthArray[1][index]}  ${monthArray[2][index]}`;  
    return `${newString}\n`;
};

const twentyCharacters = (monthString) => {
    
    let currentDeficit = 20 - monthString.length;
    const space = " ";
    monthString += space.repeat(currentDeficit)
    return monthString;
};

const hasMoreThanSixLines = (stringOfTheYear) => {
    
    const space = " ";
    let newLineCount = stringOfTheYear.split('\n').length;
    if (newLineCount < 8) {stringOfTheYear += `\n`}

    return stringOfTheYear
};


const buildQuarter = (year, lastMonthOfQuarter) => {

    let monthArray = [];
    let start = lastMonthOfQuarter - 2;

    for (let i = start; i <= lastMonthOfQuarter; i++) {
        monthArray.push(monthBuilder(year, i, false));
    };

    for(let i = 0; i < monthArray.length; i++) {
        monthArray[i] = monthArray[i].split('\n')
    };
    
    let yearString = '';

    for (var i = 0; i < 3; i++) {
        monthArray[i][0] = twentyCharacters(monthArray[i][0]) 
    }
    
    for (var i = 0; i < monthArray[0].length; i++) {
        yearString += createLine(i, monthArray)
    };

    return hasMoreThanSixLines(yearString);
};

const createYearHeadline = (year) => {
    let spaceToFill = (((LINE_LENGTH - year.toString().length) / 2) - 1);
    let space = " ";
    console.log("hey", `${space.repeat(spaceToFill)}${year}\n`)

    return `${space.repeat(spaceToFill)}${year}\n`
};

const buildFullYear = (year) => {
    let fullYearString = '';

    console.log(createYearHeadline(year))

    fullYearString += createYearHeadline(year);
    fullYearString += buildQuarter(year, 3);
    fullYearString += buildQuarter(year, 6);
    fullYearString += buildQuarter(year, 9);
    fullYearString += buildQuarter(year, 12);
    return fullYearString;
};

module.exports = { buildFullYear }

// trial += buildQuarter(2016, 6)

