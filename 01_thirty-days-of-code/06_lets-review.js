const input = '5\nNever\nGonna\nGive\nYou\nUp';

function processData(input) { 
    const inputArr = input.split('\n');
    let lineCount = inputArr[0];
    let output = '';
    let counter = 1;
    
    while (counter <= lineCount) {
        let evens = '';
        let odds = '';
        let letterArr = inputArr[counter].split('');
        letterArr.forEach(function(letter, index){
            if (index % 2 == 0) {
                evens += letter;
            }
            else {
                odds += letter;
            }
            
        })
        output = evens + ' ' + odds;
        counter++;
        console.log(output)
    }
}

processData(input);

// Alternate
function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var currLn = 1;
    var lineCount = parseInt(input[0]);
    
    while (lineCount > 0) {
        var evens = "";
        var odds = "";
        for (var i = 0; i < input[currLn].length; i++) {
            if (i === 0 || i % 2 === 0) {
                evens += input[currLn][i];
            }
            else {
                odds += input[currLn][i];
            }
        }
        process.stdout.write(evens + " " + odds + "\n");
        lineCount--;
        currLn++;
    }
} 