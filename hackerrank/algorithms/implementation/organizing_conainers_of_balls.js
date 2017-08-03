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

function check_matrix(M, n){
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if(i != j && M[i][j]) {
                return 'Impossible';
            }
        }
    }
    return 'Possible';
}

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var n = parseInt(readLine());
        var M = [];
        for(M_i = 0; M_i < n; M_i++){
           M[M_i] = readLine().split(' ');
           M[M_i] = M[M_i].map(Number);
        }
        // your code goes here
        
        for(var i = 0; i < n; i++) {
            for(var j = 0; j < n; j++) {
                if(M[j][i]) {
                    if(M[i][j]) {
                        var swap = M[j][i];
                        M[i][i] += swap;
                        M[j][i] -= swap;
                    }
                }
            }
        }
        console.log(M);
        console.log(check_matrix(M, n));
    }
}
