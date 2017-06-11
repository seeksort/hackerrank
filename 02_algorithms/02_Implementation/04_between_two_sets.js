// https://www.hackerrank.com/challenges/between-two-sets
// given two arrays, find the number of integers x in which:
// 1) all items in a are factors of x (x % a1 === 0)
// 2) x is a factor for all items in b (b1 % x === 0)


function getTotalX(a, b) {
  let integerCt = 0;
  let x = 1;

  function moduloCount(arr, num, bool) {
    let matchingCount = 0;
    // true => code for 1st array; false => code for 2nd array
    if (bool === true) {
      arr.forEach((item) => {
        if (num % item === 0) {
          matchingCount += 1;
        }
      });
    } else {
      arr.forEach((item) => {
        if (item % num === 0) {
          matchingCount += 1;
        }
      });
    }
    // return true if all items divide by current num evenly
    if (matchingCount === arr.length) {
      return true;
    }
    return false;
  }

  // while x is less that the max array item we know of, eval remainder
  while (x <= Math.max(...b)) {
    const allArrAMatchX = moduloCount(a, x, true);
    if (allArrAMatchX) {
      const allArrBMatchX = moduloCount(b, x, false);
      // only increment when satisfy both conditions
      if (allArrBMatchX) {
        integerCt += 1;
      }
    }
    x += 1;
  }
  return integerCt;
}

console.log(getTotalX([2, 4], [16, 32, 96])); // 3
