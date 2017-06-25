// https://www.hackerrank.com/challenges/day-of-the-programmer
// Given a year, return the day of the programmer (256th day) of that year using the
// calendar applicable in Russia during that year.
// 1700 - 1917: Julian | 1918: transition | 1919 - 2700: Gregorian
// Assume 1700 <= year <0 2700

function solve(year) {
  let result = '';
  // Leap year in either Julian or Gregorian
  if (
    (year < 1918 && year % 4 === 0) ||
    (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
  ) {
    const day = 256 - 244;
    result = `${day}.09.${year}`;
  } 
  // Transition year
  else if (year === 1918) {
    const day = 256 - 230;
    result = `${day}.09.${year}`;
  } 
  // Any non-leap year in either Julian or Gregorian
  else {
    const day = 256 - 243;
    result = `${day}.09.${year}`;
  }
  return result;
}

console.log(solve(2017));
console.log(solve(2016)); // leap year, Gregorian
console.log(solve(1805));
console.log(solve(1804)); // leap year, Julian
console.log(solve(1800)); // leap year, Julian (but not Gregorian)
console.log(solve(1918)); // transition year
console.log(solve(1919)); // after transition year
console.log(solve(1920)); // after transition year, leap year
console.log(solve(1700)); // edge case
console.log(solve(2700)); // edge case
