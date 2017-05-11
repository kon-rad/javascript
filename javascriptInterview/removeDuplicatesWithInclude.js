// 02/09/17

function removeDuplicates(arr) {
  var nonDup = [];
  for( var i = 0; i < arr.length; i++) {
    if(!nonDup.includes(arr[i]))
      nonDup.push(arr[i]);
  }
  console.log(nonDup);
}
removeDuplicates(['a', 'b', 'c', 'c', 'b']);
