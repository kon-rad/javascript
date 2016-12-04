
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalP = 12;
  this.name = arr[0];
  this.orbitalPeriod = orbitalP;
  //var orbitalPeriod = 2 pie ( r ^2/ u)

  arr[0].orbitalPeriod = orbitalP;
  return arr;
}

//orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//should return [{name: "sputnik", orbitalPeriod: 86400}].


// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
