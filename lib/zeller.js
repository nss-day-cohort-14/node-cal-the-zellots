'use strict';

const modMonth = month => month < 3 ? month + 12: month;
const modYear = (year, month) => month < 3 ? year - 1: year;
const zellerCon = (year, month, day) => {

    year = modYear(year, month)
    month = modMonth(month);

    let q = day;
    let m = month;
    let y = year;  

    let h = 
        (   
            q
            + Math.floor((13 * (m + 1)) / 5)
            + y
            + Math.floor(y / 4)
            - Math.floor(y / 100)
            + Math.floor(y / 400)   
        );

        // return h % 7;

        return h % 7 === 0 ? 7 : h % 7;
};

module.exports = { zellerCon, modMonth, modYear };