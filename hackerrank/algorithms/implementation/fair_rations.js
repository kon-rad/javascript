

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
    //onsole.time('fuctionTotal');
    main(); 
//console.timeEnd('fuctionTotal');   
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function isEven(n) {
    if (n%2 === 0)
        return true;
    return false;
}
function main() {
    var N = parseInt(readLine());
    B = readLine().split(' ');
    B = B.map(Number);
    var count = 0;
    for(var i = 0; i < B.length; i++) {
        var secondToLast = (i === B.length-2);
        if (i === B.length) {
            if(!isEven(B[i])){
                //console.log(count, i, 1);
                return console.log('NO');
            } else {
                continue;
            }
        } else if(secondToLast && !isEven(B[i]) && isEven(B[i+1])) {
             //console.log(count, i, 2);
             return console.log('NO');
        } else if (secondToLast && !isEven(B[i]) && !isEven(B[i+1])) {
                B[i]++;
                B[i+1]++;
                count += 2;
        } else if (!isEven(B[i])){
            if((!secondToLast && (isEven(B[i+1]) && !isEven(B[i+2]))) || !isEven(B[i+1])){
                B[i]++;
                B[i+1]++;
                count += 2;
            } else {
                /*
                console.log(count, i, 3);
                return console.log('NO');
                */
                B[i]++;
                B[i+1]++;
                count += 2;
            }
        }
    }
    console.log(count);
}