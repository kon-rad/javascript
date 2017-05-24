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

function solve(n, p){
    var start_front, 
        start_back;
    if (p == n)
        return 0;
    if(p%2!==0){
        start_front = (p-1)/2;
    } else {
        start_front = p/2;
    }
    if(n%2===0){
        n = n;
    } else {
        n--;
    }
    if(p%2==0)
        start_back = (n-p)/2;
    else
        start_back = (n-(p-1))/2;
    return (start_front<start_back ? start_front : start_back);
}

function main() {
    var n = parseInt(readLine());
    var p = parseInt(readLine());
    var result = solve(n, p);
    process.stdout.write(""+result+"\n");

}
