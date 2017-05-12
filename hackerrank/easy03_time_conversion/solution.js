
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
    var time = readLine();
	var result = time;
	if (time.charAt(8) == "P" && time.substr(0, 2) == "12") {
		result = time.substr(0, 8);
	} else if (time.charAt(8) == "P") {
		var hr = parseInt(time.substr(0, 2));
		result = (hr + 12) + time.substr(2, 6);	
	} else if (time.substr(0, 2) == "12" && time.charAt(8) == "A") {
		result = "00" + time.substr(2, 6);
	} else {
		result = time.substr(0, 8);
	}
	console.log(result);
}
