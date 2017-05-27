// https://www.hackerrank.com/challenges/staircase
// given n, produce a right-aligned staircase that is n height with a base of n width.

(function(n){
  function strCopier(string, num) {
    let copiedStr = '';
    for (var i = 1; i <= num; i++) {
      copiedStr += string;
    }
    return copiedStr;
  }
  let result = '';
  for (var j = 1; j <= n; j++) {
    let str = '';
    let hashes = j;
    let spaces = n - hashes;
    str = (strCopier(' ', spaces)) + (strCopier('#', hashes));
    result = result + str + '\n';
  }
  console.log(result);
})(6)
