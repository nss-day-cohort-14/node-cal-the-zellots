'use strict'

const argCount = (args) => {
    return args.length
};

const returnCurrentMonth = () => {
    const d = new Date()
    const thisDate = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: 1
    };
    return thisDate;
};

console.log(returnCurrentMonth())

module.exports = { argCount, returnCurrentMonth }