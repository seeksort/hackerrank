// https://www.hackerrank.com/challenges/grading
// If the difference between the student's grade and the next multiple of 5 is < 3 and >= 38, then the professor will round the grade up to the multiple of 5.

const grades = [73, 67, 38, 33];

function multipleOfFive(num) {
  if (num % 5 === 0) {
    return num;
  } else {
    return multipleOfFive(num+1);
  }
}

(function(arr) {
  arr.forEach((grade, index) => {
    if (grade >= 38) {
      const upperMultiple = multipleOfFive(grade);
      if (upperMultiple - grade < 3) {
        arr[index] = upperMultiple;
      }
    }
  });
  console.log(arr.join('\n'));
})(grades)
