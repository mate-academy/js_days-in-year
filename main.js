'use strict';

const MS_IN_MINUTE = 1000 * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;



function daysInYear(year) {
  if (Number.isInteger(year)) {
    const lastDate = new Date(year, 11, 31);
    const firstDate = new Date(year, 0, 0);
    const howManyDaysInThisYear = (lastDate - firstDate) / MS_IN_DAY;
    return howManyDaysInThisYear;
  } else {
    throw new Error('Invalid input year');
  }
}