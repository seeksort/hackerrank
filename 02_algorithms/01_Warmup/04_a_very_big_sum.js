// https://www.hackerrank.com/challenges/a-very-big-sum
// given an array of integers, print out the sum; some integers may be quite large.

function main(arr) {
    arr = arr.map(Number);
    var sum = 0;
    while (n > 0) {
        sum += arr[n-1];
        n--;
    }
    console.log(sum);
}
