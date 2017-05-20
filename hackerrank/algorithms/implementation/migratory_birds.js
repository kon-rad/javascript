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
    types = readLine().split(' ');
    types = types.map(Number);
    
    var count = [0,0,0,0,0],
    	max = 0,
    	max_id = 0;
    for(var i = 0; i < types.length; i++){
    	count[types[i] - 1]++;
    }
 
    for(i = 0; i < count.length; i++){
    	if(count[i] > max) {
    		max = count[i];
    		max_id = i + 1; 
    	}
    }
    console.log(max_id);
}