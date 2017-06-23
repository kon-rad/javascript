function processData(input) {
    //Enter your code here
    var arr = input.split('\n');
    arr = arr[1].split(' ');
    arr = arr.map(Number);
    var items = [],
        pos,
        count = [];
    arr.forEach(function(x) {
        pos = items.indexOf(x)
        if (pos == -1) {
            items.push(x);
            count.push(1);
        } else {
            count[pos]++;
        }
    })
    Array.max = function(arr){
        return Math.max.apply( Math, arr);
    }
    console.log(arr.length - Array.max(count));
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
