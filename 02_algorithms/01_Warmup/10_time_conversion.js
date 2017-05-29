// https://www.hackerrank.com/challenges/time-conversion
// Given a time in -hour AM/PM format, convert it to military (-hour) time.

const time = '12:05:45AM';

(function() {
  let timeArr = time.split(':');
  const suffix = timeArr[2].slice(2,4);
  // add 12 to any hour between noon and midnight, non-inclusive
  if (suffix === 'PM' && parseInt(timeArr[0]) < 12) {
    timeArr[0] = parseInt(timeArr[0]) + 12;
  }
  // convert midnight to 00
  if (suffix === 'AM' && parseInt(timeArr[0]) === 12) {
    timeArr[0] = '00';
  }
  // remove suffix from array
  timeArr[2] = timeArr[2].slice(0,2);
  console.log(timeArr.join(':'));
})()
