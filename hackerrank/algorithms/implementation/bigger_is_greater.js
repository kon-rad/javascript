function run(chunk) {
    var arr=chunk.split('');
    
    var cnt=0;
    do{
        if(cnt>0)
          return arr;
        ++cnt;
    }while(next_permutation(arr,function(a,b){return a<b;}));
}


function next_permutation(arr, pred) {
    if (!arr.length|arr.length===1) return false;   
    var last = arr.length-1;
    var i=last;
    
    function rev(beg,en){
        var mid=(en-beg)>>1;
        for(var x=0;x<=mid;++x){
            var tmp=arr[beg+x];
            arr[beg+x]=arr[en-x];
            arr[en-x]=tmp;
        }
    }
 
    for(;;) {
        var ii = i--;
        if (pred(arr[i],arr[ii])) {
            var j = last+1;
            while (!pred(arr[i],arr[--j]));
            var tmp=arr[i];
            arr[i]=arr[j];
            arr[j]=tmp; 
            
            rev(ii, last);
            return true;
        }
        if (i === 0) { 
            rev(0, last);
            return false;
        }
    }
}


function next_greatest(org) {
    var new_combo;
    var len = org.length;
    var highest = org.charAt(len-1);
    for (var i = len-1; i >= 0; i--) {
          if (org.charAt(i) < highest) {
              var end = org.slice(i, len);
              new_combo = run(end);
              return org.slice(0, i) + new_combo.join('');
              /*
              new_combo = permut(end);
              var sorted = order(new_combo);
              if (sorted.indexOf(end) != sorted.length-1) {
                return org.slice(0, i) + sorted[sorted.indexOf(end)+1];
              }
              */
          } else if (org.charAt(i) > highest) {
              highest = org.charAt(i);
          }
    }
    return 'no answer';
}                                       

function processData(input) {
    var lines = input.split('\n');
    for (var i = 1; i < lines.length; i++) {
        console.log(next_greatest(lines[i]));                                 
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
