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
        var expression = readLine();
        var ex = expression.split('');
        var memo = [];
        var len = ex.length;
        for(var i = 0; i < len; i++) {
            var found = false;
            if(ex[i] === '(' || ex[i] === '{' || ex[i] === '[') {
                memo.push(ex[i]);
            } else {
                var last = memo.pop();
                if((ex[i] === ')' && last !== '(') 
                   || (ex[i] === '}' && last !== '{') 
                   || (ex[i] === ']' && last !== '[')) {
                    found = true;
                    break;
                }
            }
        }
        if(!found && memo.length === 0) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }

}

