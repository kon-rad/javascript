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
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    var position = 1;
    var j = 0;
    while(alice[0] < scores[j]){
        if(scores[j] != scores[j + 1]){
            position++;
        }
        j++;
    }
    console.log(position);
    j--;
    for(var i = 1; i < alice.length; i++){
        while(alice[i] >= scores[j]){
            if(scores[j] != scores[j - 1]){
                position--;
            }
            j--;
        }
        console.log(position);
    }
}
