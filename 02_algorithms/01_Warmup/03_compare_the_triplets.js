// https://www.hackerrank.com/challenges/compare-the-triplets
// Given two arrays of player scores in three categories, allocate points for each player as their scores go head-to-head

const a0 = 5;
const a1 = 6;
const a2 = 7;
const b0 = 3;
const b1 = 6;
const b2 = 10;

(function(a0, a1, a2, b0, b1, b2){
    let firstScore = 0;
    let secondScore = 0;
    const firstArr = Array.prototype.slice.call(arguments).slice(0,3);
    const secondArr = Array.prototype.slice.call(arguments).slice(3);
    for (var i = 0; i < firstArr.length; i++) {
        if (firstArr[i] > secondArr[i]) {
            firstScore++;
        }
        else if (firstArr[i] < secondArr[i]) {
            secondScore++;
        }
    }
    console.log([firstScore, secondScore]);
})(a0, a1, a2, b0, b1, b2);
