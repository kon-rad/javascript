// 7kyu Kata Completed 12/15/16

function lenR(x) {
  if (!x[0]) {
    return 0;
  } else {
    if (Array.isArray(x)) {
      x.splice(-1,1);
      return 1  + (lenR(x));
    } else {
       x = x.split('');
       x.splice(-1,1);
       return 1  + (lenR(x));
    }
  }
}

// Example Tests

//lenR([]); // should return 0
//lenR([2,1]); // should return 2
lenR("hello"); // should return 5

// Other solutions
// function lenR(x) {
//   if(x[0] === undefined){
//    return 0
//  } else {
//    return 1 + lenR(x.slice(1))
//  }
// }
