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
    var n = parseInt(readLine());
    var grid = [],
        notCavity = false,
        count = 0,
        xCoordinates = [];
    for(var grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine();
       grid[grid_i] = grid[grid_i].split('');
    }
    for(var grid_i = 1; grid_i < n-1; grid_i++){
       var row = grid[grid_i];
       for(var i = 1; i < row.length-1; i++){
           if (row[i]>=row[i-1] && row[i]>=row[i+1]){
               for(var j = 0; j<3;j++){
                   if(!(grid[grid_i-1][j] <= row[i] && grid[grid_i+1][j]<=row[i])){
                       notCavity = true;
                   }
               }
               if(!notCavity){
                   xCoordinates.push([[grid_i],[i]]);
               }
               notCavity = false
           }
       }
    }
    xCoordinates.forEach(function(item){
        grid[item[0]][item[1]] = 'X';
    })
    grid.forEach(function(item){
        console.log(item.join(''));
    })

}
