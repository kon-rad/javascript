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
    var length = s.length;
    var row = Math.floor(Math.sqrt(length));
    var col = Math.ceil(Math.sqrt(length));
    var encrypted = [];
    if (row*col < length) {
        row += 1;
    }
    for(var i = 0; i < col; i++){
        for(var j = 0; j < row; j++){
            encrypted.push(s.charAt((j*col)+i));
        }
        encrypted.push(' ');
    }
    console.log(encrypted.join(''));
}
