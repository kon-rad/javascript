function is_square(num){
	if(Math.sqrt(num) % 1 === 0)
		return ture;
	return false;
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    for(var i = 1; i < input.length; i++){
    	var result = 0;
    	var num = input[i].split(' ');

    	for(var j = num[0]; j <= num[1]; j++){
    		// var sq = is_square(j);
    		if(is_square(j))
    			result++;
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
