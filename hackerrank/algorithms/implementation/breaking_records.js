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

function getRecord(s){
    // Complete this function
    var highest = s[0],
        lowest = s[0],
        count = [0, 0];
    for(var i = 0; i < s.length; i++){
        if (s[i] > highest){
            highest = s[i];
            count[0]++;
        } 
        if (s[i] < lowest){
            lowest = s[i];
            count[1]++;
        }
    }
    return count;
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}