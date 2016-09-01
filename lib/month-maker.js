'use strict' 

const { zellerCon } = require('./zeller');

const months = [    {name: 'Janury', days: 31},
                    {name: 'February', days: 28},
                    {name: 'March', days: 31},
                    {name: 'April', days: 30},
                    {name:'May', days: 31},
                    {name:'June', days: 30},
                    {name:'July', days: 31},
                    {name:'August', days: 31},
                    {name:'September', days: 30},
                    {name:'October', days: 31},
                    {name:'November', days: 30},
                    {name:'December', days: 31}
];

const monthHeader = (year, month) => {
    const monthHeader = months[month - 1].name;
    let headerString = `${monthHeader} ${year}`;
    let spaces = 20 - headerString.length;
    headerString = `${" ".repeat(spaces / 2)}${monthHeader} ${year}\n`;
    return(headerString);
};

const dayString = () => {
    return 'Su Mo Tu We Th Fr Sa\n'
};

const zeroSpacer = ( num ) => {
    return num.toString().length < 2 ? ` ${num}` : num.toString();
}

const leapYear = (year) => {
    if ( year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
        return true
    } else {
        return false
    }
}

const firstOfTheMonth = (year, month) => {
    let firstOfMonth = zellerCon(year, month, 1);
    return firstOfMonth;
}

module.exports = { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth, months }