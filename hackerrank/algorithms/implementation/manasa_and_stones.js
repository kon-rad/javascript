function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var len = input.length;
    for(var i = 1; i < len; i+=3) {
        var n = parseInt(input[i]);
        var a = parseInt(input[i+1]);
        var b = parseInt(input[i+2]);
        var ans = [];
        if (a <= b) {
            for(var j = n-1; j >= 0; j--) {
                var k = (a*j) + b*(n-j-1);
                if(ans.indexOf(k)== -1) {
                    ans.push(k);
                }
            }
        } else {
            for(var j = 0; j < n; j++) {
                var k = (a*j) + b*(n-j-1);
                if(ans.indexOf(k)== -1) {
                    ans.push(k);
                }
            }
        }
        console.log(ans.join(' '));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
