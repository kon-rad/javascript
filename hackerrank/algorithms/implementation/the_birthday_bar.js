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

function getWays(squares, d, m){
    // Complete this function
    var count = 0,
        sum;
    for(var i = 0; i <= squares.length - m; i++){
        sum = 0;
        for(var j = 0; j < m; j++){
            sum += squares[i + j];
        }
        if (sum == d)
            count++;
    }
    return count;
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = getWays(s, d, m);
    Console.log(result);

}
