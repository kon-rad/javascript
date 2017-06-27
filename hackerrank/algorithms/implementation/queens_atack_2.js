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
        diagonals = 0,
        diagonal_max_possible = 0,
        obstacle_blocks = 0,
        squares_blocked = 0,
        possible_spaces = (cQueen - 1) + (n - cQueen) + (rQueen - 1) + (n - rQueen),
        up_right = Math.min((n-cQueen), (n-rQueen)),
        down_right = Math.min((n-cQueen), (rQueen-1)),
        up_left = Math.min((cQueen-1), (n-rQueen)),
        down_left = Math.min((cQueen-1), (rQueen-1));
    
    for(var a0 = 0; a0 < k; a0++){
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        // check location of obstacl
        // obstacle is on the same row as queen
        if (rObstacle == rQueen) {
            // obstacle is to the right of queen
            if (cObstacle > cQueen) {
                squares_blocked -= (n - cObstacle);
            // obstacle is to the left of queen
            } else {
                squares_blocked -= (cObstacle);
            }
            // obstacle is on the same column as queen
        } else if (cObstacle == cQueen) {
            if (rObstacle > rQueen) {
                squares_blocked -= (n - rObstacle) - 1;
            } else {
                squares_blocked -= rObstacle;
            }
           // obstacle is on a diagonal 
        } else if ((rObstacle - rQueen) == (cObstacle - cQueen)) {
            // obstacle is to the right of queen
            if (cObstacle > cQueen) {
                // obstacle is above the queen
                if (rObstacle > rQueen) {
                    obstacle_blocks = Math.min((n - rObstacle), (n - cObstacle)) + 1;     
                    up_right = up_right - obstacle_blocks;
                // obstacle is below the queen
                } else if (rObstacle < rQueen) {
                    obstacle_blocks = Math.min((n - rObstacle), (n - cObstacle)) + 1;
                    down_right = down_right - obstacle_blocks;
                }
                // obstacle is to the left of queen
            } else if (cObstacle < cQueen) {
                if (rObstacle > rQueen) {
                    obstacle_blocks = Math.min((cObstacle-1), (n - rObstacle));
                    up_left = up_left - obstacle_blocks;
                } else {
                    obstacle_blocks = Math.min((cObstacle-1), (rObstacle-1));
                    down_left = down_left - obstacle_blocks;
                }
                
            }
        }
    }
    console.log((possible_spaces + squares_blocked) + up_right+up_left+down_right+down_left);
    //console.log(possible_spaces - obstacle_blocks);
}