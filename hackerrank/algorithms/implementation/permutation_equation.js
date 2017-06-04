
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    input = input.split('\n');
    var list = input[1].split(' ');
    list = list.map(Number);
    var pos = 0, pos2 = 0;
    // console.log(list);
    for(var i = 1; i <= list.length; i++){
        pos = (list.indexOf(i)) + 1;
        pos2 = (list.indexOf(pos)) + 1;
        console.log(pos2);
    }
});


