
function processData(input) {
    input = input.split('\n');
    var k = input[0].split(' ');
    k = Number(k[1]);
    var arr = input[1].split(' ').map(Number);
    var mod_arr = new Array(k + 1).fill(0),
        count = 0;
    arr.forEach(function(num) {
        var pos = num % k;
        mod_arr[pos]++;
    });
    if (k % 2 === 0) {
        for(var i = 0; i <= (k / 2); i++) {
            if (i === 0 && mod_arr[i] > 0) {
                count++;
            } else if (i === (k / 2)) {
                count++;
            } else {
                count += Math.max(mod_arr[i], mod_arr[k - i]);
            }
        }
    } else {
        for(var i = 0; i <= Math.floor(k/2); i++) {
            if (i === 0 && mod_arr[i] > 0) {
                count++;
            } else {
                count += Math.max(mod_arr[i], mod_arr[k - i]);
            }
        }   
    }
    console.log((count == 0) ? 1 : count);
    
} ;
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
