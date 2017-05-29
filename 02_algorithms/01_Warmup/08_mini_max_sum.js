// https://www.hackerrank.com/challenges/mini-max-sum
// Given 5 positive integers, return the min and max sums that are possible using 4 of the 5 integers (one must be excluded)

const arr = [4, 51, 2, 35, 9999];

(function(){
  let result = '';
  let sortedArr = arr.sort((a, b) => (a - b));
  result += sortedArr.slice(0,4).reduce((acc, val) => (acc + val), 0);
  result += ' ' + sortedArr.slice(1,5).reduce((acc, val) => (acc + val), 0);
  console.log(result);
})()
