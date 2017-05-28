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

function find_size(i, j, a){
	var count = 0;
	for(var m = 0; m < a.length; m++){
		if (a[m] == i || a[m] == j)
			count++;
	}
	return count;
}
function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var size = 0,
    	max = 0;

    for (var i = 0; i < a.length; i++){
    	for (var j = 0; j < a.length; j++){
    		if (i == j || Math.abs(a[i] - a[j]) > 1)
    			continue;
    		size = find_size(a[i], a[j], a);
    		if (size > max)
    			max = size;
    	}
    }
    console.log(max);
}
