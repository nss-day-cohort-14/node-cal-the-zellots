'use strict'

const { monthBuilder } = require('./cal-builder');

let createLine = (index, monthArray) => {
    let newString = ''
    for (var i = 0; i < monthArray.length; i++) {
            newString += `${monthArray[i][index]}  `;
        }; 
    return `${newString}\n`
};

const twentyCharacters = (monthString) => {
    
    let currentDeficit = 20 - monthString.length;
    const space = " ";
    monthString += space.repeat(currentDeficit)
    return monthString;
};




const buildQuarter = (year, counter) => {

    let monthArray = [];
    let start = counter - 2

    for (let i = start; i <= counter; i++) {
        monthArray.push(monthBuilder(year, i));
    }

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
    return yearString
};




let trial = "";
trial += buildQuarter(2016, 3);
trial += buildQuarter(2016, 6)

console.log(trial)