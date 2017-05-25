const i, d, s;

function main() {
    let i2, d2, s2;
    i2 = parseInt(readLine());  
    d2 = parseFloat(readLine()); 
    s2 = readLine().toString(); 
    console.log(
        parseInt(i + i2) + '\n' +
        (d + d2).toFixed(1) + '\n' +
        s + s2
    );
}
