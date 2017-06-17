function is_divisible_by(num1, num2){
  if (num1 % num2 === 0)
    return true;
  return false;
}
function getCombinations(arr, k) {
  var result = [];
  var f = function(prefix, arr) {
    for (var i = 0; i < arr.length; i++) {
      if(test_for_divisibility(prefix + " " + arr[i], k)) {
        result.push(prefix + " " + arr[i]);
        f(prefix + " " + arr[i], arr.slice(i + 1));
      }
    }
  }
  f('', arr);
  return result;
}
function test_for_divisibility(arr, k){
    arr = arr.split(' ');
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            var divisible = ((Number(arr[i]) + Number(arr[j])) % k === 0);
            if (i != j && divisible){
                    return false;
            } 
        }
    }
    return arr.length;
}
function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var k = input[0].split(' ');
    k = k[1];
    var arr = input[1].split(' ');
    var combinations = getCombinations(arr, k);
    var lengths = [];
    
    console.log("combinations = " + combinations);
    if (combinations.length === 0){
        return console.log(1);
    }
    combinations.forEach(function(x){
        var split_array = x.split(' ');
        //console.log("split array = " + split_array);
        lengths.push(split_array.length - 1);
        //if(test_for_divisibility(x, k)){
          //  lengths.push(test_for_divisibility(x, k));
        //} 
    });
    //console.log(lengths);
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
