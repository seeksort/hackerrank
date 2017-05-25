const input = 8;
var N = parseInt((input));

(function() {
    let output = 'Weird';
    if (N % 2 == 0) {
        if (N < 5 || N > 20) {
            output = `Not ${output}`;
        } 
    }
    console.log(output);
})();