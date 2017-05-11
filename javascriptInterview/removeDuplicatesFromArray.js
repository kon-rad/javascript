// 02/09/17

function removeDuplicates(arr) {
  var nonDup = [];
  for( var i = 0; i < arr.length; i++) {
    var dup = false;
    var element = arr[i];
    for(var j = 0; j < nonDup.length; j++) {
      if(element == nonDup[j])
        dup = true;
    }
    if(!dup) {
      nonDup.push(element);
    }
  }
  console.log(nonDup);
}
removeDuplicates(['a', 'b', 'c', 'c', 'b']);
