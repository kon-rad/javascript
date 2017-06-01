function reversed(n){
	var str = n + "";
	str = str.split('').reverse();
	str = str.join('');
	return Number(str);
}

function processData(input) {
    //Enter your code here
    input = input.split(' ');
    var i = Number(input[0]),
    	j = Number(input[1]),
    	k = Number(input[2]),
    	count = 0;
    for(i; i <= j; i++){
    	var m = Math.abs(i - reversed(i));
    	if(m % k == 0){
    		count++;
    	}
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
   processData(_input);
});
