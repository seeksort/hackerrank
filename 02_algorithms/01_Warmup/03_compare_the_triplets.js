// https://www.hackerrank.com/challenges/compare-the-triplets
// Given two arrays of player scores in three categories, allocate points for each player as their scores go head-to-head

function solve(a0, a1, a2, b0, b1, b2){
    var firstScore = 0;
    var secondScore = 0;
    var firstArr = Array.prototype.slice.call(arguments).slice(0,3);
    var secondArr = Array.prototype.slice.call(arguments).slice(3);
    for (var i = 0; i < firstArr.length; i++) {
        if (firstArr[i] > secondArr[i]) {
            firstScore++;
        }
        else if (firstArr[i] < secondArr[i]) {
            secondScore++;
        }
    }
    return [firstScore, secondScore];
}

