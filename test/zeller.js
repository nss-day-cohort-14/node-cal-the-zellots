'use strict'

const { assert: {isFunction} } = require('chai');

const { zellerCon } = require('../lib/zeller');

const d = new Date();
let thisDate = { month: d.getMonth(),
                 day: d.getDate(), 
                 year: d.getFullYear(),
                 dayOfWeek: d.getDay()
                
};


describe('zellerCon', () => {
    it('should be a function', () => {
        console.log(thisDate)
        isFunction(zellerCon);
    })
})

