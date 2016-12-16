// 5kyu Kata Created 12/16/16
function dirReduc(arr){
  function opposite(x) {
    switch(x) {
      case "NORTH":
        return "SOUTH";
      case "SOUTH":
        return "NORTH";
      case "EAST":
        return "WEST";
      case "WEST":
        return "EAST";
    }
  }

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] == opposite(arr[i + 1])) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr;
}

//Example Tests
//dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]); // should return  ["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // should return ["WEST"]
//dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) // should return  []
