function find_first_square(num){
    var start = Number(num[0]);
    var end = Number(num[1]);
    for(var i = start; i <= end; i++){
        var sqrt = Math.sqrt(i) 
        if(sqrt % 1 == 0){
            return sqrt
        }
    }
    return 0;
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    for(var i = 1; i < input.length; i++){
        var result = 0;
        var num = input[i].split(' ');
        var first = find_first_square(num);
        var finding = true;
        if (first != 0){
            while (finding) {
                if(Math.pow(first++, 2) <= num[1])
                    result++;
                else 
                    finding = false;
            }
        }
        console.log(result);
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
