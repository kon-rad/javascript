// No repeats please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
//
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


function permAlone(str) {
  var result = [];
  var noRepeat = [];
  var s = str.split('');

  s.forEach(function(x, index) {
    if (result.length === 0) {
      result.push(x);
    } else if (result.length == 1) {
      result[1] = result[0];
      result[0] = result[0].split('');
      result[0].unshift(x);
      result[1] = result[1].split('');
      result[1].push(x);
    } else {
      var level = result.splice(0);
      for (var i = 0; i < level.length; i++) {
        var base = level[i].slice(0);

        base.unshift(x);
        result.push(base);
        base = level[i].slice(0);
        base.push(x);
        result.push(base);
        base = level[i].slice(0);
        for (var j = 1; j < base.length; j++) {
          base.splice(j, 0, x);
          result.push(base);
          base = level[i].slice(0);
        }
      }
    }
  });

  if (result.length == 1) {
    return result.length;
  }
  result.forEach(function(input) {
    input = input.join('');
    if (!(/(.)\1/).test(input)) {
      console.log(input);
      noRepeat.push(input);
    }
  });

   return noRepeat.length;
}

//TEST CASES

// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.


// No repeats please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
//
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


function permAlone(str) {

  let result = [];
  let s = str.split('');

  let makePermutations = (array, newLetter) => {

    array.forEach( x => )


    return "hi";
  };


  let noRepeat = [];
  let strLength = str.length;

  result.forEach(function(input) {
    if (!/(.)\1/.test(input)) {
      noRepeat.push(input);
    }
  });

  return makePermutations(strLength);


}
permAlone('ss');

//TEST CASES

// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.
