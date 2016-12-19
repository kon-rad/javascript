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
