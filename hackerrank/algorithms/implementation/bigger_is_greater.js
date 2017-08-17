
function permut(arr) {
  if(arr.length < 2) return arr;
  var permutations = [];
  for(var i = 0; i < arr.length; i++) {
    var char = arr[i];
    if(arr.indexOf(char) != i)
      continue;
    var remainingString = arr.slice(0, i) + arr.slice(i+1, arr.length);
    for (var subPermutation of permut(remainingString)){
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}

function order(arr) {
  if (Array.isArray(arr)) {
    arr = arr.sort();
  }
  return arr;
}


function next_greatest(org) {
    var new_combo;
    var len = org.length;
    for (var i = len-1; i >= 0; i--) {
          var end = org.slice(i, len);
          new_combo = permut(end);
          var sorted = order(new_combo);
          if (sorted.indexOf(end) != sorted.length-1) {
            return org.slice(0, i) + sorted[sorted.indexOf(end)+1];
          }
          
          if(i ==4) break;
    }
    return 'no answer';
}                                       

function processData(input) {
    var lines = input.split('\n');
    for (var i = 1; i < lines.length; i++) {
        console.log(next_greatest(lines[i]));                                 
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
