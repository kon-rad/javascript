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
            var dist = i - (parseInt(A[i]) - 1);
            console.log('dist =', dist);
            console.log('i =', i);
            pairs.push(num[(parseInt(A[i]) -1)]);
        } 
        num[A[i]] = (i+1);
   
    }
    min = Math.min(pairs);
    console.log(min);
    console.log(pairs);
    console.log(num);
}
