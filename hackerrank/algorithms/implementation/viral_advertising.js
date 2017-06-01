function processData(input) {
    //Enter your code here
    input = Number(input);
    var liked = 0,
    	shared = 5,
        new_likes;
    for(var i = 1; i <= input; i++){
    	liked += Math.floor(shared/2);
        new_likes = Math.floor(shared/2);
    	shared = new_likes * 3;
    }
    console.log(liked);
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