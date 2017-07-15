process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var bigNum = require('bignumber.js');

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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var b_temp = readLine().split(' ');
        var b = parseInt(b_temp[0]);
        var w = parseInt(b_temp[1]);
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        var sum = 0;
        if ((x+z) < y) {
            var b_x = new bigNum(x);
            var b_b = new bigNum(b);
            var b_z = new bigNum(z);
            var b_w = new bigNum(w);
            var big_b = b_x.times(b_b);
            var big_w = b_x.plus(b_z).times(b_w);
            
            sum = (big_b.plus(big_w));
        } else if ((y+z) < x) {
            var b_y = new bigNum(y);
            var b_b = new bigNum(b);
            var b_z = new bigNum(z);
            var b_w = new bigNum(w);
            var big_b = b_y.plus(b_z).times(b_b);
            var big_w = b_y.times(b_w);
            
            sum = (big_b.plus(big_w));
        } else {
            var b_y = new bigNum(y);
            var b_x = new bigNum(x);
            var b_b = new bigNum(b);
            var b_z = new bigNum(z);
            var b_w = new bigNum(w);
            var big_b = b_x.times(b_b);
            var big_w = b_y.times(b_w);
            
            sum = (big_b.plus(big_w));
        }
        console.log(sum.toString());
    }
    
}
