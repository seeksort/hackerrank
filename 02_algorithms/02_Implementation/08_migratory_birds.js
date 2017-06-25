// https://www.hackerrank.com/challenges/migratory-birds
// Given an array of `n` integers where each integer describes the type of a bird in
// the flock, find and print the type number of the most common bird. If two or
// more types of birds are equally common, choose the type with the smallest ID number.

function migratoryBirds(n, ar) {
  const typeCountAr = [0, 0, 0, 0, 0, 0];
  let currentMaxIndex = 1;
  ar.forEach(current => typeCountAr[current] += 1);
  typeCountAr.forEach((current, index) => {
    if (typeCountAr[index] > typeCountAr[currentMaxIndex]) {
      currentMaxIndex = index;
    }
  });
  return currentMaxIndex;
}

console.log(migratoryBirds(6, [5, 5, 5, 5, 5, 5]));
