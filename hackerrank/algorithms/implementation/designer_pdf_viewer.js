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
    h = readLine().split(' ');
    h = h.map(Number);
    var word = readLine();
    var height = 0;
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l',
    	'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i = 0; i < word.length; i++){
    	height = h[abc.indexOf(word[i])];
    	if(height > max)
    		max = height;
    }
    console.log(max * word.length);
}
