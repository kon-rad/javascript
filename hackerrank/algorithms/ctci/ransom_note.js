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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    var magazine = readLine().split(' ');
    var ransom = readLine().split(' ');
    var magObj = {};
    var ranObj = {};
    magazine.forEach(function(item) {
        if(magObj.hasOwnProperty(item)) {
            magObj[item] += 1;
        } else {
            magObj[item] = 1;
        }
    })
    ransom.forEach(function(item) {
        if(ranObj.hasOwnProperty(item)) {
            ranObj[item] += 1;
        } else {
            ranObj[item] = 1;
        }
    })
    for(var letter in ranObj) {
        var len = ranObj[letter];
        for(var i = 0; i < len; i++) {
            if ( magObj.hasOwnProperty(letter) == false ) {
                console.log('No');
                return;
            } else if ( magObj[letter] == 1 ) {
                delete magObj[letter];
            } else {
                magObj[letter] -= 1;
            }
        }
    }
    console.log('Yes');
}
