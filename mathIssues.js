// 5kyu Kata
// Completed 12/19/16

Math.round = function(number) {
  var decimal = number % 1;
  var whole = number - decimal;
  if (decimal < 0.5)
      return whole;
  else
      return whole += 1;
};

Math.ceil = function(number) {
  var decimal = number % 1;
  var whole = number - decimal;
  if (decimal === 0)
      return whole;
  else
      return whole += 1;
};

Math.floor = function(number) {
  var decimal = number % 1;
  var whole = number - decimal;
  return whole;
};

// Test Cases
Math.ceil(5) // should return  5
// Test.assertEquals(Math.round(0.4), 0, 'Math.round(0.4)');
// Test.assertEquals(Math.round(0.5), 1, 'Math.round(0.5)');

// Test.assertEquals(Math.ceil(0.4), 1, 'Math.ceil(0.4)');
// Test.assertEquals(Math.ceil(0.5), 1, 'Math.ceil(0.5)');

// Test.assertEquals(Math.floor(0.4), 0, 'Math.floor(0.4)');
// Test.assertEquals(Math.floor(0.5), 0, 'Math.floor(0.5)');





//*************************************************************************//




// Other Solutions
// Credit: burce, FunGuy, mionu, Ulyana_Nikalayenko, Raman_Nerad, dhamilton (plus 5 more warriors)


// Math.round = function(number) {
//   return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
// };
//
// Math.ceil = function(number) {
//   return (parseInt(number) === number) ? number : parseInt(number) + 1;
// };
//
// Math.floor = function(number) {
//   return parseInt(number);
// };
