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

function check_a(num, a){
    for(var i = 0; i < a.length; i++){
        if (num % a[i] !== 0 )
            return false;
    }
    return true;
}

function factor_of_B(num, b){
    for(var i = 0; i < b.length; i++){
        if (b[i] % num !== 0)
            return false;
    }
    return true;
}
function getTotalX(a, b){
    var result = 0;
    for(var i = 0; i < 1000; i++) {
        if(check_a(i, a) && factor_of_B(i, b)) {
            result++;
        }
    }
    return result;
}


function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write(""+total+"\n");

}