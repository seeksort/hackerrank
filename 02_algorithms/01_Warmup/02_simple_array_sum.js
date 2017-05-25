// 1st challenge was to get familiarized with read from stdin / write to stdout: https://www.hackerrank.com/challenges/solve-me-first
// 2nd challenge - given an array of numbers, print the sum of all values: https://www.hackerrank.com/challenges/simple-array-sum


function main(arr) {
    arr = arr.map(function(current) {
        return parseInt(current);
    });
    arr = arr.reduce(function(acc, num){
      return acc + num
    }, 0);
    console.log(arr);
}


