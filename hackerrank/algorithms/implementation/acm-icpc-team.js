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
    var topic = [];
    for(var topic_i = 0; topic_i < n; topic_i++){
       topic[topic_i] = readLine();
    }
    
    var combo,
        sum,
        max = 0,
        memo = {};
    var combine = function(topic1, topic2) {
        var sum = 0;
        for(var i = 0; i < m; i++) {
            if (topic1.charAt(i) == '1' || topic2.charAt(i) == '1') sum++;
        }
        return sum;
    }
    for (var i = 0; i < n; i++) {
        for (var j = 1; j < n; j++) {
            combo = (i < j) ? [i, j] : [j, i];
            
            if ((combo in memo) || i == j) {
                continue;
            } else {
                sum = combine(topic[i], topic[j]);
                if (sum > max) {
                    max = sum;
                    count = 1;
                } else if (sum == max) {
                    count++;
                }
                memo[combo] = sum;
            }
        }
    }
    console.log(max);
    console.log(count);
}
