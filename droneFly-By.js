//Completed 12/12/2016 

function flyBy(lamps, drone){
  lamps = lamps.split('');
  return lamps.map(function(item, position) {
    if (position < drone.indexOf('T') + 1) {
      return item = 'o';
    } else {
      return item;
    }
  }).join('');
}


// Test Cases

flyBy('xxxx', '====T');
// Testing for xxxx and ====T Expected: 'oooo'
//flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx');
//, 'ooooox');
// flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx')
