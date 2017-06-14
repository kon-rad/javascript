function is_divisible_by(num1, num2){
	if (num1 % num2 === 0)
		return true;
	return false;
}
function getCombinations(arr) {
  var result = [];
  var f = function(prefix, arr) {
    for (var i = 0; i < arr.length; i++) {
      result.push(prefix + arr[i]);
      f(prefix + arr[i], arr.slice(i + 1));
    }
  }
  f('', arr);
  return result;
}
function test_for_divisibility(arr, k){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if (i != j && is_divisible_by((i+j), k)){
                    return arr.length;
            } else {
                return false;   
            } 
        }
    }
}
function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var k = input[0].split(' ');
    k = k[1];
    var arr = input[1].split(' ');
    var combinations = getCombinations(arr);
    var lengths = [];
    combinations.forEach(function(x){
        if(test_for_divisibility(x, k)){
            lengths.push(test_for_divisibility(x, k));
        } 
    });
    console.log(Math.max.apply(null, lengths));
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
