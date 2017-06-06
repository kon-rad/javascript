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
    for(var a0 = 0; a0 < t; a0++){
        var n = readLine();
        var num = parseInt(n),
        	count = 0;
        n = n.split('');
        for(var i = 0; i < n.length; i++){
        	if(num % parseInt(n[i]) === 0){
        		count++;
        	}
        }
        console.log(count);
    }
}