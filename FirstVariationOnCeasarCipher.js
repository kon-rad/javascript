// 5kyu Kata
// Completed on 12/23/16

function movingShift(s, shift) {
  s = s.split('');

  var num = Math.ceil(s.length / 5);
  var alph = "abcdefghijklmnopqrstuvwxyz";
  var coded = [];
  var result = [],
      capitalize = false,
      newLetter;
  console.log(s.join(''));
  for (var i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() != s[i]) {
      capitalize = true;
      letter = s[i].toLowerCase();
    } else {
      letter = s[i];
    }
    //console.log(alph.indexOf(letter))
    if(alph.indexOf(letter) == -1) {
     // console.log(letter);
      coded.push(letter);
    } else {
      console.log(newLetter);
      newLetter = alph.indexOf(letter) + shift + i;
      if (newLetter > 25) {
          console.log(newLetter);
          var x = Math.floor(newLetter/26);
          newLetter = (newLetter - (x * 26));
          console.log(newLetter);
      } if(capitalize) {
        coded.push(alph.charAt(newLetter).toUpperCase());
        capitalize = false;
      } else {
        coded.push(alph.charAt(newLetter));
      }
    }
  }
  console.log(coded.join(''));
  coded = coded.join('');

  result.push(coded.slice(0, num));
  result.push(coded.slice(num, (num * 2)));
  result.push(coded.slice(((num * 2)), (num * 3)));
  result.push(coded.slice(((num * 3)), (num * 4)));
  if (coded.slice(((num * 4) + 4), (num * 5)).length !== 0)
    result.push(coded.slice(((num * 4)), (num * 5)));


  return result;
}

function demovingShift(arr, shift) {
    return "";
}


var u = "I should have known that you would have a perfect answer for me!!!"
var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
movingShift(u, 1);  //, v)
