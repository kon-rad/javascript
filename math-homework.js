var x = [2, 2, 1, 1, 11];
var y = [1, 2, 1, 2, 11];

function leastSquareLine(x, y) {
  var n = x.length,
      sigXY = sigmaXY(x, y),
      sigX = sigmaArr(x),
      sigY = sigmaArr(y),
      sigXsq = sigmaXsq(x);
      
  var topLine = n*sigXY - sigX(x)*sigY;
  var bottomLine = n * sigXsq - Math.pow(sigX, 2);
  return topLine / bottomLine;
}

function sigmaXY(x, y){
  var sums = [];
  for(var i = 0; i < x.length; i++) {
    sums.push(x[i] * y[i]);
  }
  return sums.reduce(function(a, b) { return a + b; }, 0);
}

function sigmaArr(x){
  return x.reduce(function(a, b) { return a + b; }, 0);
}

function sigmaXsq(x){
  var xSq = x.map(function(num) { return Math.pow(num, 2); });
  return xSq.reduce(function(a, b) { return a + b; }, 0);
}

console.log(sigmaXsq(x));