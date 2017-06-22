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
    var s = readLine();
    var n = parseInt(readLine());
    
    s = s.split('');
    var length = s.length,
        count = 0,
        rem = 0;
    s.forEach(function(x, index) {
        if(x == 'a') {
            count++;
        }
        if(index < n % length && x == 'a')
            rem++;
    });
    console.log(count * Math.floor(n/length) + rem);
}