
var answer = [];

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var s = parseInt(input[0]);
    var e = parseInt(input[1]);
    find_kaprekar_nums(s, e);
      if (answer.length === 0) {
    console.log("INVALID RANGE");
  } else {
    console.log(answer.join(' '));
  }
} 

function find_kaprekar_nums(s, e) {
  for(var i = s; i <= e; i++) {
    is_kaprekar(i);
  }
}

function is_kaprekar(i) {
  var c = i;
  var s = i*i;
  //console.log(s);
  s = s.toString().split('');a
  var len = s.length;
  var h = Math.floor(len/2);
  var f = s.splice(0, h);
  var t = s;
  f = parseInt(f.join(''));
  t = parseInt(t.join(''));
  if(!f) f=0;
  if(f+t == c && c!==0) {
    answer.push(c);
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
