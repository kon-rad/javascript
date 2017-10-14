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
    var a = readLine();
    var b = readLine();
    var aArr = a.split('');
    var bArr = b.split('');
    var aObj = {};
    var bObj = {};
    var count = 0;
    for(var i = 0; i < aArr.length; i++) {
        if(aObj[aArr[i]]) {
            aObj[aArr[i]] += 1;
        } else {
            aObj[aArr[i]] = 1;
        }
    }
    for(var i = 0; i < bArr.length; i++) {
        if(bObj[bArr[i]]) {
            bObj[bArr[i]] += 1;
        } else {
            bObj[bArr[i]] = 1;
        }
    }
    //console.log(a, b, aObj, bObj, count);  
    count = countDiff(aObj, bObj, count);
    //console.log(a, b, aObj, bObj, count);  
    count = countDiff(bObj, aObj, count);
    //console.log(a, b, aObj, bObj, count); 
    console.log(count);
}

function countDiff(aObj, bObj, count) {
    for( var letter in aObj ) {
        if(bObj[letter]) {
            var bNum = bObj[letter];
            var aNum = aObj[letter];
            if(bNum == aNum) {
                delete bObj[letter];
                delete aObj[letter];
            } else if (aNum > bNum) {
                count += (aNum - bNum);
                delete bObj[letter];
                delete aObj[letter];
            } else if (bNum > aNum) {
                count += (bNum - aNum);
                delete bObj[letter];
                delete aObj[letter];
            }
        } else {
            count += aObj[letter];
            delete aObj[letter];
        }
    }
    return count;
}