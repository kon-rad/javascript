// 5kyu Kat
// Completed 12/18/16


function cakes(recipe, available) {
  var number = [];
  for (var item in recipe) {
      if (item in available) {
        var n = Math.floor(available[item] / recipe[item]);
        number.push(n);
      }
      else {
        number.push(0);
      }

  }
  return Math.min.apply(null, number);
}

// Example Tests

  var recipe = {flour: 500, sugar: 200, eggs: 1};
  var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
cakes(recipe, available)// Should return  2
