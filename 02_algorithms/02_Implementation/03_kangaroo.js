// https://www.hackerrank.com/challenges/kangaroo
// Given two kangaroos' starting positions and meters covered per jump, determine if the kangaroos will ever land at the same place at the same time.

// Kanga 1 position, velocity
const x1 = 0;
const v1 = 2;
// Kanga 2 position, velocity
const x2 = 5;
const v2 = 3;

function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) {
    return 'NO';
  }
  let currentK1 = x1;
  let currentK2 = x2;
  let gap = x2 - x1;
  while (currentK1 < currentK2) {
    currentK1 += v1;
    currentK2 += v2;
    if (currentK1 === currentK2) {
      return 'YES';
    } else if ((currentK2 - currentK1) === gap) {
      return 'NO';
    }
  }
  if (currentK1 > currentK2) {
    return 'NO';
  }
}

console.log(kangaroo(0, 3, 4, 2)); // Yes
console.log(kangaroo(0, 2, 5, 3)); // No
