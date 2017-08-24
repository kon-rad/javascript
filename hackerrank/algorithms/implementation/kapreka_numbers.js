function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var s = input[0];
    var e = input[1];
    find_kaprekar_nums(s, e);
} 

function find_kaprekar_nums(s, e) {
  for(var i = s; i <= e; i++) {
    is_kaprekar(i);
  }
}

function is_kaprekar(i) {
  var s = i*i;
  s = s.toString().split('');
  console.log(s);
}
var data = "1\n50";
processData(data);
