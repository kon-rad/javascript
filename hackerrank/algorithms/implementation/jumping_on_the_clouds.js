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
    var k = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var position = 0,
        e = 100;
    while(position < n){
        position = (position + k)%n;
        if(c[position] == 1){
            e -= 2;
        }
        e -= 1;
        if(position == 0)
            break;
    }
    console.log(e);
}

// my other solution


function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    var jump = -1;
    for(var i = 0; i < c.length; i++) {
        jump++;
        if(c[i+2] === 0) {
            i++;
        } 
    };
    console.log(jump);

}