// 7kyu Kata completed 12/14/16

function reverse(str) {
  var n = str.length

  str = str.split('');
  if (str.length == 1)
    return str[n - 1];
  else
    return str[n - 1] + reverse(str.slice(0, n - 1).join(''));

}

// Example Test


reverse('hello');// should return 'olleh'
