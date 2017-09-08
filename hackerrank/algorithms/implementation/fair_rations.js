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
function isEven(n) {
    if (n%2 === 0)
        return true;
    return false;
}
function main() {
    var N = parseInt(readLine());
    B = readLine().split(' ');
    B = B.map(Number);
    var count = 0;
    var secondToLast;
    var curE,
        len = B.length;
    for(var i = 0; i < len; i++) {
        secondToLast = (i === len-2);
        curE = isEven(B[i]);
        nxtE = isEven(B[i+1]);
        if (i === len) {
            if(!curE){
                return console.log('NO');
            } else {
                continue;
            }
        } else if(secondToLast && !curE && nxtE) {
             return console.log('NO');
        } else if ((secondToLast && !curE) && !nxtE) {
                B[i]++;
                B[i+1]++;
                count += 2;
        } else if (!curE){
            if((!secondToLast && nxtE && !isEven(B[i+2])) || !nxtE){
                B[i]++;
                B[i+1]++;
                count += 2;
            } else {
                B[i]++;
                B[i+1]++;
                count += 2;
            }
        }
    }
    console.log(count);
}
