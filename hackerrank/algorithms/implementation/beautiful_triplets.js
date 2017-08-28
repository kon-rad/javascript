function processData(input) {
    input = input.split('\n');
    var d = input[0].split(' ')[1],
        sequence = input[1].split(' ');
    sequence = sequence.map(Number);
    d = parseInt(d);
        count = 0;
    for(var i = 0; i < sequence.length-2; i++) {
        for (var j = 0; j < sequence.length-1; j++) {
            if(sequence[j] - sequence[i] === d) {
                for(var k = j+1; k<sequence.length; k++) {
                    if(sequence[k]-sequence[j] === d) {
                        count++;
                    }
                }
            }
        }
    }
    console.log(count);
} 

function processData2(input) {
    input = input.split('\n');
    var d = input[0].split(' ')[1],
        sequence = input[1].split(' ');
    sequence = sequence.map(Number);
    d = parseInt(d);
        count = 0;
    seq = {};
    for(var i = 0; i < sequence.length; i++) {
        if(seq[sequence[i]-d] && seq[sequence[i]-(2*d)]) {
            count++;
        }
        seq[sequence[i]] = true;
    }
    console.log(count);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    console.time('old way');
   processData(_input);
    console.timeEnd('old way');
    console.time('new way');
   processData2(_input);
    console.timeEnd('new way');

});
