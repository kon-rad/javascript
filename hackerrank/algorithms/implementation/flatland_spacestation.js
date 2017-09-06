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
    var m = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);
    var swapped;
    var max = 0;
    do {
        swapped = false;
        for (var i=0; i < c.length-1; i++) {
            if (c[i] > c[i+1]) {
                var temp = c[i];
                c[i] = c[i+1];
                c[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    var limit = (c.length>1)?(c.length-1):(c.length)
    for(var i = 0; i < limit; i++) {
        if(i === 0) {
            max = c[i];
        }
        if (c[i]+1 != c[i+1]) {
            var diff = Math.abs(c[i]-c[i+1]);
            var dist = Math.floor(diff/2);
        }
        if(dist > max) max = dist;
    }
    if(n-c[c.length-1]-1 > max) max = n-c[c.length-1]-1;
    console.log(max);
    
}
