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
    c = readLine().split(' ');
    c = c.map(Number);
    var pos,
    	single = [],
    	count = 0;

    for(var i = 0; i < c.length; i++){
    	if(single.indexOf(c[i]) == -1){
    		single.push(c[i]);
    	} else {
    		pos = single.indexOf(c[i]);
    		single.splice(pos, 1);
    		count++;
    	}
    }
    console.log(count);
}