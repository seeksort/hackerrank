const input = 5;

function main() {
    var n = parseInt(input);
    (function() {
        let output = '';
        for (let i = 1; i <= 10; i++) {
            output += `${n} x ${i} = ${n*i}\n`;
        }
        console.log(output)
    })()
}

main();