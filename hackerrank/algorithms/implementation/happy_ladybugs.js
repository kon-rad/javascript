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
    var Q = parseInt(readLine());
    for(var a0 = 0; a0 < Q; a0++){
        var n = parseInt(readLine());
        var b = readLine();
        b = b.split('');
        var ldbs = {};
        var sldbs = {};
        var possible = 'YES';
        var len = b.length;
        b.forEach(function(item, index) {
            if (ldbs[item]) {
                ldbs[item]++;
            } else {
                ldbs[item] = 1;
            }
        });
        if (!('_' in ldbs) && ldbs.length!=0) {
            if (singlesExist())
                possible = 'NO';
        } else {
            for(ldb in ldbs) {
                if (ldb != '_' && ldbs[ldb] == 1) {
                    possible = 'NO';
                    break;
                }
            }
        }
        //console.log(ldbs);
        console.log(possible);  
    }
    function singlesExist() {
        if(len == 1)
            return true;
        if(b[0]!=b[1] || b[len-1]!=b[len-2])
            return true;
        for(var i = 1; i < len-2; i++) {
            var item = b[i];
            if(b[i+1] != item && b[i-1]!=item) {
                return true;
            }
        }
    }
}
