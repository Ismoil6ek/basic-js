const { AssertionError } = require('chai');
const { NotImplementedError } = require('../extensions/index.js');
const seasonMonths = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

    if (Date.parse(date) === NaN) {
        throw new AssertionError('Invalid date!');
    } else return seasonMonths[date.getMonth()];
}

module.exports = {
    getSeason
};