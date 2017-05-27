// https://www.hackerrank.com/challenges/diagonal-difference
// Given a matrix of arrays of size n * n, find the absolute difference between the sums of its diagonals.

const n = 3;
const a = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
/*
Original matrix:
11 2 4
4 5 6
10 8 -12
*/

(function() {
    let sumA = 0;
    let sumB = 0;
    for (var i = 0; i < a.length; i++) {
        sumA += a[i][i];
        sumB += a[i][a.length - 1 - i];
    }
    console.log(Math.abs(sumA - sumB));
})()
