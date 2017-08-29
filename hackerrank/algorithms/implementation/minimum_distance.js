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
    A = readLine().split(' ');
    A = A.map(Number);
    var min,
        pairs = [],
        num = {};
    for(var i = 0; i < A.length; i++) {
        if(num[A[i]]) {
            var dist = i - (num[parseInt(A[i])] - 1);
            pairs.push(dist);
        } 
        num[A[i]] = (i+1);
   
    }
    if(pairs.length > 0) {
    min = Math.min.apply(null, pairs);
    console.log(min);
    } else {
        console.log(-1);
    }
}
