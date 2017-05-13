
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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var neg = 0, pos = 0, zero = 0, len = 0;
    len = arr.length
    for(var i = 0; i < len; i++) {
        if (arr[i] < 0)
            neg++;
        else if (arr[i] == 0)
            zero++;
	else
	    pos++;
    }
    neg = neg / len;
    zero = zero / len;
    pos = pos / len;
    console.log(pos.toFixed(6));
    console.log(neg.toFixed(6));
    console.log(zero.toFixed(6));
}

