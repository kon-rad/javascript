// 6kyu Kata completed 12/14/16

function solution(number){
  var result = [];
  while (number >= 0) {
      number--;
    if(number % 3 === 0 || number % 5 === 0) {
      result.push(number);
    }
  }

  if (result.length === 0)
    return 0;
  else
    return result.reduce(function(a,b) {
      return a + b;
    });
}

// Example Test
solution(10);// Should return 23; 
