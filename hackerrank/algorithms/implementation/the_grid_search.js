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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var R_temp = readLine().split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = [];
        var found = false;
        for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = readLine();
           G[G_i] = G[G_i].split('');
           G[G_i]=G[G_i].map(Number);
        }
        var r_temp = readLine().split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = [];
        for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = readLine();
           P[P_i] = P[P_i].split('');
           P[P_i] = P[P_i].map(Number);
        }
        //console.log(R, C, G, P, r, c);
        
        for(var i = 0; i < R-(r-1); i++) {
            for(var j = 0; j<C-(c-1);j++) {
                //console.log(G[i][j],i,j);
                
                if(G[i][j] === P[0][0]) {
                    if(G[i+(r-1)][j+(c-1)] === P[r-1][c-1]) {
                        found = true;
                        for(var p = 0; p<r; p++) {
                            for(var k = 0; k<c; k++){
                                //console.log(G[i+p][j+k],P[p][k],p,k);
                                if(G[i+p][j+k] !== P[p][k]){
                                    found= false;
                                    //console.log(G[i+p][j+k],P[p][k],p,k);
                                    break;
                                }
                            }
                            if(!found)
                                break;
                        }
                    }
                }
                if(found)
                    break;
            }
            if(found)
                break;
        }
        if(found)
            console.log('YES');
        else
            console.log('NO');
    }

}
