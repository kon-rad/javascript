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
    var min = A.length+1,
        num = {};
    for(var i = 0; i < A.length; i++) {
        if(num[A[i]]) {
            var dist = i - (num[parseInt(A[i])] - 1);
            if(dist < min) min = dist;
            if(min === 1) break;
        } 
        num[A[i]] = (i+1);
   
    }
    if(min != A.length+1) {
        console.log(min);
    } else {
        console.log(-1);
    }
}
