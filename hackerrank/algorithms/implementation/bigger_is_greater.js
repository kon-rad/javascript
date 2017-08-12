
function sort_after_j(arr, j) {
    var ending = arr.splice(j+1);
    var len = ending.length;
    do {
        var swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (ending[i] > ending[i + 1] ) {
                var tmp = ending[i+1];
                ending[i+1] = ending[i];
                ending[i] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr.concat(ending);
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
    	var first_letter = org_arr[i];
        for (var j = i-1; j >= 0; j--) {
        	if(org_arr[j] < first_letter) {
	            new_combo = swap_char(org_arr, i, j);
	            new_combo = sort_after_j(new_combo, j);
            	return new_combo.join('');
        	}
        }
    }
    return 'no answer';
}                                         

function processData(input) {
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
