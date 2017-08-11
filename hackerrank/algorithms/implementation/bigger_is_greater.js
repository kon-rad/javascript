function is_greater(original, new_combination) {
    console.log('original: ');
    console.log(original);
    console.log('new_combination: ');
    console.log(new_combination);
    var len = original.length;
    for(var i = 0; i < len; i++) {
        if (original[i] < new_combination[i]) 
            return true;
    }
    return false;                                    
}

function swap_char(org_arr, i, j) {
    var temp = org_arr[i];
    org_arr[i] = org_arr[j];
    org_arr[j] = temp;
    return org_arr;
    
}
                                          
function find_next_greatest(original) {
    var org_arr = original.split('');
    var new_combo;
    var len = org_arr.length;
    for (var i = len; i >= 0; i--) {
        for (var j = i-1; j >= 0; j--) {
            new_combo = swap_char(org_arr, i, j);
            if(is_greater(org_arr, new_combo))
                return new_combo.join('');
        }
    }
    return 'no answer';
}                                         

function processData(input) {
    //Enter your code here
    console.log(input);
    var lines = input.split('\n');
    for (var i = 1; i < lines.length; i++) {
        console.log(find_next_greatest(lines[i]));                                 
    }                                      
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
