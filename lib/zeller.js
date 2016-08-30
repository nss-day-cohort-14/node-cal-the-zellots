'use strict';

const d = new Date();

let thisDate = { month: 1,
                 day: d.getDate(), 
                 year: 1998,
                 dayOfWeek: d.getDay()
                
};

let dateVars = ({day, month, year}) => {
    
    let obj = {};
    obj.q = day;
    if (month === 1 || month === 2) {
        obj.m = month + 12;
    } else {
        obj.m = month;
    };
    obj.k = year % 100;
    obj.j = Math.floor(year / 100);
    return obj
}

const zellerCon = (date) => {
    return date
};

console.log(zellerCon(thisDate))

module.exports = { zellerCon };