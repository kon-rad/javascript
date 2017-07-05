
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
    var rQueen_temp = readLine().split(' ');
    var rQueen = parseInt(rQueen_temp[0]);
    var cQueen = parseInt(rQueen_temp[1]),
        row_right_min = n - cQueen,
        row_left_min = cQueen - 1,
        col_up_min = n - rQueen,
        col_down_min = rQueen - 1,
        spaces,
        up_right_min = Math.min((n-cQueen), (n-rQueen)),
        down_right_min = Math.min((n-cQueen), (rQueen-1)),
        up_left_min = Math.min((cQueen-1), (n-rQueen)),
        down_left_min = Math.min((cQueen-1), (rQueen-1));
    
    for(var a0 = 0; a0 < k; a0++){
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        if (rObstacle == rQueen) {
            if (cObstacle > cQueen) {
                spaces = (cObstacle - cQueen) - 1;
                if (spaces < row_right_min) row_right_min = spaces;
            } else {
                spaces = (cQueen - cObstacle) - 1;
                if (spaces < row_left_min) row_left_min = spaces;
            }
        } else if (cObstacle == cQueen) {
            if (rObstacle > rQueen) {
                spaces = ((rObstacle - rQueen) - 1);
                if (spaces < col_up_min) col_up_min = spaces;
            } else {
                spaces = ((rQueen - rObstacle) - 1);
                if (spaces < col_down_min) col_down_min = spaces;
            }
        } else if (Math.abs(rObstacle - rQueen) == Math.abs(cObstacle - cQueen)) {
            if (cObstacle > cQueen) {
                if (rObstacle > rQueen) {
                    spaces = ((cObstacle - cQueen) - 1); 
                    if (spaces < up_right_min) up_right_min = spaces;
                } else if (rObstacle < rQueen) {
                    spaces = ((cObstacle - cQueen) - 1);
                    if (spaces < down_right_min) down_right_min = spaces;
                }
            } else if (cObstacle < cQueen) {
                if (rObstacle > rQueen) {
                    spaces = ((cQueen - cObstacle) - 1);
                    if (spaces < up_left_min) up_left_min = spaces;
                } else {
                    spaces = ((cQueen - cObstacle) - 1);
                    if (spaces < down_left_min) down_left_min = spaces;
                }
                
            }
        }
    }
    console.log(row_left_min + row_right_min + col_up_min + col_down_min + up_right_min + up_left_min + down_right_min+down_left_min);
}