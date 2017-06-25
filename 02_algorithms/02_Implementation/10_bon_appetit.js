// https://www.hackerrank.com/challenges/bon-appetit
// In array (length `n`) of food items ordered, Anna skips the `k`'th item (zero-indexed). Given
// `b`, the amount billed to Anna, determine whether the bill is fairly split. If so, print
// `Bon Appetit`; otherwise, print the amount of money that Brian must refund to Anna.

function bonAppetit(n, k, b, ar) {
  const annaShare = (ar.reduce((acc, val) => acc + val, 0) - ar[k]) / 2;
  if (b !== annaShare) {
    return b - annaShare;
  }
  return 'Bon Appetit';
}

console.log(bonAppetit(4, 1, 12, [3, 10, 2, 9])); // 5 (overcharged)
console.log(bonAppetit(4, 1, 7, [3, 10, 2, 9])); // Bon Appetit
