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
    var h = parseInt(readLine());
    var m = parseInt(readLine()),
        min,
        hour;
    
    var sn = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var ts = ['', '', 'twenty', 'thirty', 'fourty', 'fifty'];
    console.log(h,m);
    
    function dict(m){
        m = m+'';
        m = m.split('');
        if (m.length == 2 && m[0] == 1) {
            return tn[parseInt(m[1])];
        } else if (m.length == 1) {
            return sn[parseInt(m[0])];
        } else {
            return tn[parseInt(m[0])] + " " + sn[parseInt(m[1])];
        }
    }
    
    switch(m) {
        case 0:
            min = '';
            break;
        case 15:
            min = 'quarter';
            break;
        case 30:
            min = 'half past';
            break;
        default:
            min = dict(m);
    }
    hour = dict(hour);
    if (min = '') {
        console.log(hour + " o'clock");
    } else if ()

}
