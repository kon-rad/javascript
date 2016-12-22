// 6kyu Kata
// Completed on: 12/22/16


decodeMorse = function(morseCode){
  var result = [];
  morseCode = morseCode.split('   ');
  morseCode.forEach(function(element) {
    element = element.split(' ');
    element.forEach(function(item) {
      result.push(MORSE_CODE[item]);
    });
    result.push(' ');
  });
  return result.join('').trim();
}
