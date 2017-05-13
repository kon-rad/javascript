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
    height = readLine().split(' ');
    height = height.map(Number);
    var max = height[0];
    var count = 0;
    for (var i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i];
            count = 1;
        } else if (height[i] == max) {
            count++;
        }
    }
    console.log(count);
}

