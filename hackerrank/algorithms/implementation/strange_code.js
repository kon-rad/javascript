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
    var t = parseInt(readLine());
    var currentCycleStart = 3,
        curValE_T = 3,
        curValS = 3,
        curTimeS = 1,
        curVal = 1;
    
    if(t <= 0)
        return console.log(0);
    while (!inThisCycle()) goToNextCycle();
    curVal = curValS - (t - curTimeS);
    console.log(curVal);
    
    /*helper functions*/
    function goToNextCycle() {
        curValE_T = curValE_T + curValS*2;
        curTimeS += curValS;
        curValS *= 2;
    }
    function inThisCycle() {
        if (t <= (curValE_T)) {
            return true;
        } else {
            return false;
        }
    }
}