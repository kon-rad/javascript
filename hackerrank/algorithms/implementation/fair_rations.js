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
    for(var i = 0; i < N-1; i++) {
        if(!isEven(B[i])){
            B[i]++;
            B[i+1]++;
            count+=2;
        }
    }
    if(isEven(B[N-1]))
        console.log(count);
    else
        console.log('NO');

}
