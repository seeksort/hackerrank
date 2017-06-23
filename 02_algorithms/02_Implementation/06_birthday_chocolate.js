// https://www.hackerrank.com/challenges/the-birthday-bar
// Determine the number of ways a piece of chocolate `n` squares long can be broken, given
// the constraint that the broken off portion must be `m` pieces long with the total of integers
// etched on the pieces adding up to `d`.
// `s` = array of integers etched on the chocolate pieces.
// `d` = birth date
// `m` = birth month

function solve(n, s, d, m) {
  let combos = 0;
  // start at point in array where we have `m` values
  for (let i = m - 1; i < s.length; i += 1) {
    let currentSum = s[i];
    // starting from m places away from i, total the values up to and including value at i
    for (let j = (i - m + 1); j < i; j += 1) {
      currentSum += s[j];
    }
    //console.log(currentSum)
    if (currentSum === d) {
      combos += 1;
    }
  }
  return combos;
}

console.log(solve(5, [1, 2, 1, 3, 2], 3, 2));
console.log(solve(1, [4], 4, 1));
