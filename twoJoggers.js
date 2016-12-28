// 5kyu Kata
// Completed 12/21/16

var nbrOfLaps = function (x, y) {
  var z = y;
  while((z/x) % 1 !== 0 || (z/y) % 1 !== 0) {
    z += y;
  }
  return [(z/x), (z/y)];
}

nbrOfLaps(4, 6); // returns [3,2]



// Other solution
// Credit: niting112, FunGuy, DeeMak13, mionu, Ulyana_Nikalayenko, dima-pavlyut (plus 2 more warriors)

// function gcd(a, b) {
//   if(b == 0)
//     return a;
//   return gcd(b, a % b);
// }
//
// var nbrOfLaps = function (x, y) {
//   var lcm = (x*y)/ gcd(x,y);
//   return [lcm/x, lcm/y];
// }
