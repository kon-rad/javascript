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

function saveThePrisoner(n, m, s){
    var i = 0,
        above = n - s;
        m = m - above;
        m = m-(Math.floor(m/n) * n);
        i += m;
        return (i - 1 <= 0) ? n : i - 1;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        console.time('saveThePrisoner');
        var result = saveThePrisoner(n, m, s);
        console.timeEnd('saveThePrisoner');
        process.stdout.write(""+result+"\n");
    }

}
