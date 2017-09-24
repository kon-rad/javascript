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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var s = readLine().split(' ');
    s = s.map(Number);
    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'
    if(n === 0)
        return console.log('1');
    var ways = findChange(s, m, n);
    console.log(ways);
    
    function findChange(s, m, n) {
        var arr = [];
        arr[0] = 1;
        for(var k = 1; k<=n;k++) {
            arr[k] = 0;
        }
        for (var i = 0; i < m; i++) {
            for (var j = s[i]; j <= n; j++) {
                arr[j] += arr[j - s[i]];
            }
        }
        return arr[n];
    }
}
