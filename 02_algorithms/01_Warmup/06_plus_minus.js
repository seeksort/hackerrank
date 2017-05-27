// https://www.hackerrank.com/challenges/plus-minus
// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line. Print values up to 10^-4

const n = 6;
arr = [-4, 3, -9, 0, 4, 1];

(function() {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  arr.forEach((curr) => {
    if (curr === 0) {
      zero++;
    } 
    else if (curr < 0) {
      neg++;
    }
    else {
      pos++;
    }
  }); 
  console.log((pos / n).toPrecision(6));
  console.log((neg / n).toPrecision(6));
  console.log((zero / n).toPrecision(6));
})()

