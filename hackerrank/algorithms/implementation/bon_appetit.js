function processData(input) {
	input = input.split('\n');
	var first_line = input[0].split(' '),
		k = first_line[1],
		second_line = input[1].split(' '),
		b = input[2],
		sum = 0;

	for(var i = 0; i < second_line.length; i++){
		if (i != k)
			sum += parseInt(second_line[i]);
	}
	if(sum/2 == b)
		console.log("Bon Appetit");
	else
		console.log(b - (sum/2));
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
