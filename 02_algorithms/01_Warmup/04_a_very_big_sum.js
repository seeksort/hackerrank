// https://www.hackerrank.com/challenges/a-very-big-sum
// given an array of integers, print out the sum; some integers may be quite large.

let n = 5;
const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

(function(arr) {
    arr = arr.map(Number);
    let sum = 0;
    while (n > 0) {
        sum += arr[n-1];
        n--;
    }
    console.log(sum);
})(arr)
