// 5kyu Kata
// Completed on: 12/20/16
// My solution:

function validParentheses(parens){

  var p = parens.split('');
  var openCount = 0;
  var closeCount = 0;
  var open = false;
  for(var i = 0; i < p.length; i++) {
    if (p[i] == '(') {
      openCount++;
      open = true;
    } else if (p[i] == ')' && open) {
      if(openCount - (closeCount) === 0) {
        open = false;
        return false;
      } else {
        closeCount++;
      }
    } else if (!open && p[i] == ')') {
      return false;
    }
  }
  if (openCount - closeCount === 0)
    return true;
  else
    return false;

}

// Example Tests
validParentheses( ")" );// should return false

// validParentheses( "(()()))(" ); // should return false

//validParentheses( ")()()()(" ); should return false
//validParentheses( "()" );  // should return true
//validParentheses( "())" ); // should return false


// Other solutions
// Credit: ooflorent

// 
// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
//
//   return n == 0;
// }
