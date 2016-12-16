// 7kyu Kata completed 12/13/16


function chirp(n) {
  if (n <= 1) {
    return "chirp";
  }
  n -= 1;
  return "chirp-" + chirp(n);
}


// Example Tests
chirp(4);// should return "chirp-chirp-chirp-chirp"

//chirp(2) // should return "chirp-chirp"
