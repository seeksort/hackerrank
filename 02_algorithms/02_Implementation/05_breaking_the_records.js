// https://www.hackerrank.com/challenges/breaking-best-and-worst-records
// Given Maria's array of scores for a season of n games, find and print the number
// of times she breaks her record for most and least points scored during the season.

function getRecord(s) {
  let max = s[0];
  let maxCt = 0;
  let min = s[0];
  let minCt = 0;
  s.forEach((current) => {
    if (current > max) {
      max = current;
      maxCt += 1;
    } else if (current < min) {
      min = current;
      minCt += 1;
    }
  });
  return `${maxCt} ${minCt}`;
}

console.log(getRecord([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(getRecord([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
