process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function main() {
    var n = parseInt(readLine());
    
    const bigFactorial = n => {
        const bigNumber = require('bignumber.js');
        let result = new bigNumber(1);
        for (let i = 1; i <= n; i++) {
            result = result.mul(i);
        }
    return result.toFixed();
    }
    console.log(bigFactorial(n));
}

function main() {
    var n = parseInt(readLine());
    
    let sum = [1]
    // Length is half max length b/c we're multiplying
    const MAX_LENGTH = Math.floor(String(Number.MAX_SAFE_INTEGER).length/2)-1
    const MAX_VALUE = Number(Array(MAX_LENGTH+1).join('9'))
    for (let i=2; i<=n; i++) {
        let carryover = 0
        for (let j=0; j<sum.length; j++) {
            let newValue = sum[j] * i + carryover
            
            if (newValue > MAX_VALUE) {
                let newValueStr = String(newValue)
                carryover = Number(newValueStr.substr(0, newValueStr.length-MAX_LENGTH))
                sum[j] = Number(newValueStr.substr(-MAX_LENGTH))
            } else {
                carryover = 0
                sum[j] = newValue
            }
        }
        if (carryover !== 0) sum.push(carryover)
    }
    // Don't left-pad the highest order group
    let highestGroup = sum.pop()
    // Left pad all other groups with '0'
    sum = sum.map(v=>Array(MAX_LENGTH+1-String(v).length).join('0')+v)
    console.log(highestGroup + sum.reverse().join(''))
}
