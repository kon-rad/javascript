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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var infinite = 0;
    console.log(arr.length);
    do {
        var count = 0;
        var lowest = Math.min.apply(null, arr);
        arr = arr.map(function(x) { return x - lowest;}); 
        for(var i = 0; i < arr.length; i++){ 
            if(arr[i]>0){
                count++;
            } else {
                arr.splice(i, 1);
                i--;
            }
        };
        if(count>0)
            console.log(count);
        if(infinite>100) break;
    } while (count > 0);
    
}
