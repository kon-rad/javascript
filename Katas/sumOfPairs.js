// 5kyu kata completed 12/13/16

var sum_pairs=function(ints, s){
    var result = [],
        resultIndices = [],
        intsCopy = ints.slice(0),
        noMatches = false;

    for (var i = 0; i < ints.length; i++) {
      for (var j = 0; j < ints.length; j++) {
        if (ints[i] + ints[j] == s && i != j) {
          var match = [ints[i], ints[j]];
          var matchIndices = [i, j];
          ints[i] = "X";
          ints[j] = "X";
          result.push(match);
          resultIndices.push(matchIndices);
        }
          else if ( i == ints.length - 1 && result.length === 0) {
            noMatches = true;
            break;
          }
      }
    }

    function bubbleSort(a) {
      var length = a.length;
      for (var k = 0; k < length; k++) {
        for (var l = 0; l < length - 1; l++) {
          if (a[l][1] > a[l + 1][1]) {
            var temp = a[l];
            a[l] = a[l + 1];
            a[l + 1] = temp;
            console.log("workin");
          }
        }
      }
    }

    bubbleSort(resultIndices);

    if (noMatches)
      return undefined;
    else
      return [intsCopy[resultIndices[0][0]], intsCopy[resultIndices[0][1]]];
};




 l1= [1, 4, 8, 7, 3, 15];
 sum_pairs(l1, 8); // should return [1, 7] for sum = 8"
// l2= [1, -2, 3, 0, -6, 1];
// l3= [20, -13, 40];
// l4= [1, 2, 3, 4, 1, 0];
// l5= [10, 5, 2, 3, 7, 5];
// l6= [4, -2, 3, 3, 4];
// l7= [0, 2, 0];
// l8= [5, 9, 13, -3];
//
// Test.describe("Testing For Sum of Pairs", function(){
// Test.expect(sum_pairs(l1, 8)+"" == [1, 7]+"", "Basic: ["+l1+"] should return [1, 7] for sum = 8");
// Test.expect(sum_pairs(l2, -6)+"" == [0, -6]+"", "Negatives: ["+l2+"] should return [0, -6] for sum = -6");
// Test.expect(sum_pairs(l3, -7) == undefined, "No Match: ["+l3+"] should return undefined for sum = -7");
// Test.expect(sum_pairs(l4, 2)+"" == [1, 1]+"", "First Match From Left: ["+l4+"] should return [1, 1] for sum = 2 ");
// Test.expect(sum_pairs(l5, 10)+"" == [3, 7]+"", "First Match From Left REDUX!: ["+l5+"] should return [3, 7] for sum = 10 ");
// Test.expect(sum_pairs(l6, 8)+"" == [4, 4]+"", "Duplicates: ["+l6+"] should return [4, 4] for sum = 8");
// Test.expect(sum_pairs(l7, 0)+"" == [0, 0]+"", "Zeroes: ["+l7+"] should return [0, 0] for sum = 0");
// Test.expect(sum_pairs(l8, 10)+"" == [13, -3]+"", "Subtraction: ["+l8+"] should return [13, -3] for sum = 10");
// });


var sum_pairs=function(ints, s){

  var count = 1,
      length = ints.length,
      resultIndices = [],
      noMatches = false;

  while (count < length) {
    for(var i = 0; i < count; i++) {
      for (var j = 0; j < count; j++) {
        if (i != j && ints[i] + ints[j] == s) {
          if (resultIndices.length > 0 && i > resultIndices[0][1]) {
            return [ints[i], ints[j]];
          } else if ( i == ints.length - 2 && resultIndices.length === 0) {
            console.log('hi');
            noMatches = true;
            break;
          }
          resultIndices.push([i,j]);
        }
      }
    }
    count++;
  }
  if (noMatches)
    return undefined;
  return [ints[resultIndices[0][0]], ints[resultIndices[0][1]]];
}



l3= [20, -13, 40];
sum_pairs(l3, -7)
