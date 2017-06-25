// https://www.hackerrank.com/challenges/divisible-sum-pairs
// Given an array, Find and print the number of `(n, j)` pairs where `i` and `j`
// are array indices, `i < j`, and `i + j` is divisible by `k`.

function divisibleSumPairs(n, k, ar) {
  let pairs = 0;
  for (let i = 0; i < ar.length - 1; i += 1) {
    for (let j = 1; j < ar.length; j += 1) {
      if ((ar[i] + ar[j]) % k === 0 && (i < j)) {
        pairs += 1;
      }
    }
  }
  return pairs;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
console.log(divisibleSumPairs(2, 3, [1, 2]));
