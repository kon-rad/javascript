
function next_greatest(org) {

    var start = -1;
    var len = org.length;
    org = org.split('');
    
    for (var i =0; i < len-1; i++) {
      if(org[i] < org[i+1])
        start = i;
    }
    if (start == -1)
      return console.log('no answer');
    var end = -1;
    for (var j = start+1; j < len; j++) {
      if(org[start] < org[j])
        end = j;
    }
    var tmp = org[start];
    org[start] = org[end];
    org[end] = tmp;
    var part = org.splice(start+1);
    console.log(org.concat(part.sort()).join(''));
}

function processData(input) {
    input = input.split('\n');
    for(var i = 1; i < input.length; i++) {
        next_greatest(input[i]);
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
