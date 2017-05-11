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
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			if (j < (n - (i + 1)))
				process.stdout.write(" ");
			else
				process.stdout.write("#");
		}
		process.stdout.write("\n");
	}
}	
