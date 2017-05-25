// https://www.hackerrank.com/challenges/diagonal-difference
// Given a matrix of arrays of size n * n, find the absolute difference between the sums of its diagonals.

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var sumA = 0;
    var sumB = 0;
    for (var i = 0; i < a.length; i++) {
        sumA += a[i][i];
        sumB += a[i][a.length - 1 - i];
    }
    console.log(Math.abs(sumA - sumB));
}
