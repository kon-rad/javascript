function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var max = input[0].split(' ');
    max = max[1];
    var chapters = input[1].split(' ');
    var book = [];
    var ans = 0;
    max = parseInt(max);
    chapters = chapters.map(Number);
    chapters.forEach(function(problems){
        var cur = 0;
        while(max <= problems){
            // subtract problems from total
            problems -= max;
            // increase range of current problems
            cur += max;
            // add range of problems to book
            book.push(cur);
            // check if page number is within problem range
            if(isWithinRange(cur-max, cur, book.length)){
                ans++;
            }
        }
        if(problems > 0){
            // add remaining problems to page and check if page # is in range
            cur += problems;
            book.push(cur);
            if(isWithinRange(cur-problems, cur, book.length)){
                ans++;
            }
        }
    })
    console.log(ans);
}

function isWithinRange(start, end, page){
    if(page > start && page <= end){
        return true;
    }
    return false;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
