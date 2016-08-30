'use strict';

const modMonth = month => month < 3 ? month + 12: month;
const modYear = (year, month) => month < 3 ? year - 1: year;

const zellerCon = (year, month, day) => {

    month++
    year = modYear(year, month)
    month = modMonth(month);
    
    

    let h = 
        (   
            day
            + Math.floor((13 + (month + 1)) / 5)
            + year
            + Math.floor(year / 4)
            - Math.floor(year / 100)
            + Math.floor(year / 400)   
        );
        let d = Math.floor((h + 5) %7) + 1;
        return d
};





// const zellerCon = ( { day, month, year } ) => {
//     console.log(day, month, year)
//     month = month + 1;

//      if ( month < 3) {
//         month = month + 12;
//         year--
//     };

//     let h = ( day + ((13 * Math.floor(month + 1))/5) + year + Math.floor((year / 4)) - Math.floor(year/100) + Math.floor((year / 400)));
//     let d = Math.floor((h + 5) %7) + 1;
//     console.log(d)
//     return d
    
// };

// zellerCon(thisDate)
// zellerCon(dateObj)

// console.log(zellerCon(thisDate))

module.exports = { zellerCon, modMonth, modYear };