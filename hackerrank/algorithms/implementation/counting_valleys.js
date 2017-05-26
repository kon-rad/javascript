function processData(input) {
    input = input.split('\n');
    var pos = 0,
    	steps = input[1].split(''),
    	valley = false,
    	valley_count = 0;


    for(var i = 0; i < steps.length; i++){
    	if(steps[i] == 'U')
    		pos++;
    	else if (steps[i] == 'D')
    		pos--;
    	if(pos < 0 && !valley) {
    		valley = true;
    	}
    	if(pos >=0 && valley){
    		valley_count++;
    		valley = false;
    	}
    }
    console.log(valley_count);
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