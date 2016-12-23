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

// Test cases
decodeMorse('.... . -.--   .--- ..- -.. .')// should return 'HEY JUDE')



// Other Solutions
// Credit: czyzykowski, RJackson88
//
// decodeMorse = function(morseCode){
//   function decodeMorseLetter(letter) {
//     return MORSE_CODE[letter];
//   }
//   function decodeMorseWord(word) {
//     return word.split(' ').map(decodeMorseLetter).join('');
//   }
//   return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }
