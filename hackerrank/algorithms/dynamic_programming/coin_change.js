process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////


function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var s = readLine().split(' ');
    s = s.map(Number);
    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'
    if(n === 0)
        return console.log('1');
    var memo = {};
    var ways = findChange(s, n, 0, memo);
    console.log(ways);
    
    function findChange(coins, money, index, memo) {

      if(money === 0) {
        return 1;
      }
      if (index >= coins.length) {
        return 0;
      }
      var key = money+'-'+index;
      if (memo.hasOwnProperty(key)) {
        return memo[key];
      }
      var ways = 0;
      var amountWithCoin = 0;
      while (amountWithCoin <= money) {
        var remaining = money - amountWithCoin;
        ways += findChange(coins, remaining, index+1, memo);
        amountWithCoin += coins[index];
      }
      memo[key] = ways;
      return ways;
    }
}
