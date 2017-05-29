// https://www.hackerrank.com/challenges/birthday-cake-candles
// Colleen can only blow out the tallest candles on her cake. Print the number of candles she can successfully blow out.

const height = [33, 5182, 5182, 33, 999];

(function() {
  const max = Math.max(...height);
  let maxCount = 0;
  height.forEach((value) => {
    if (value === max) {
      maxCount++;
    }
  })
  console.log(maxCount);
})()
