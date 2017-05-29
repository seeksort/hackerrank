// https://www.hackerrank.com/challenges/mini-max-sum
// Given 5 positive integers, return the min and max sums that are possible using 4 of the 5 integers (one must be excluded)

const arr = [4, 51, 2, 35, 9999];

(function(){
  let result = '';
  let sortedArr = arr.sort((a, b) => (a - b));
  result += sortedArr.slice(0,4).reduce((acc, val) => (acc + val), 0);
  result += ' ' + sortedArr.slice(1,5).reduce((acc, val) => (acc + val), 0);
  console.log(result);
})();

// I liked HackerRank's solution, and tried to implement using JS native methods:
(function() {
  let result = '';
  const sum = arr.reduce((acc, val) => (acc + val), 0);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  result = (sum - max) + ' ' + (sum - min);
  console.log(result);
})()
