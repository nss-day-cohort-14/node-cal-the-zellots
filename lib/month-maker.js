'use strict' 

const { zellerCon } = require('./zeller');

const months = [    {name: 'January', days: 31},
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


// creates the  month header ex: "     March 2016\n"
const monthHeader = (year, month, bool) => {
        
        const header = months[month - 1].name;
        let headerString = "";
        
    if (!bool) {
        let header = months[month - 1].name;
        let spaces = 20 - header.length;
        headerString = `${" ".repeat(spaces/2)}${header}\n`

    } else {
        headerString = `${header} ${year}`;
        let spaces = 20 - headerString.length;
        headerString = `${" ".repeat(spaces / 2)}${header} ${year}\n`;
    }
    return(headerString);
};

// creates teh second line of the cal output
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
};


// deprecate 
const chopLastSpace = (str) => {
    let stringToUse = str.split('\n');
    let newArray = []
    stringToUse.forEach((x) => {newArray.push(x.substring(0, x.length - 1))});
    return newArray.join('\n')
};

module.exports = { monthHeader, dayString, zeroSpacer, leapYear, firstOfTheMonth, months, chopLastSpace }