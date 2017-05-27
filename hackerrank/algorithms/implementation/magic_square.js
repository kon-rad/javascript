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
    var s = [],
        min = 45,
        cost;
    var all_squares =
    [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],
    ];


    for(s_i = 0; s_i < 3; s_i++){
       s[s_i] = readLine().split(' ');
       s[s_i] = s[s_i].map(Number);
    }
    for(var i = 0; i < 8; i++){
        cost = 0;
        for (var j = 0; j < 3; j++){
            for (var m = 0; m < 3; m++){
                cost += Math.abs(all_squares[i][j][m] - s[j][m]);
            }
        }
        if(cost < min)
            min = cost;
    }
    console.log(min);
}