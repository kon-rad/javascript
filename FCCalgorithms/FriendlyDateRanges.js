// Completed by Konrad Gnat
// November 28th, 2016




//Friendly Date Ranges
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
//
// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
//
// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.
//
// Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.
//
// If the range ends in the same month that it begins, do not display the ending year or month.


function makeFriendlyDates(arr) {
  var result = [];
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var ordinal = ["st", "nd", "rd", "th"];
  var print = 0,
      sameYear = false,
      sameYearByDays = false;

    //Decide what data to return
    var start = arr[0].split('-');
    var end = arr[1].split('-');

    //Determine if less than year apart
    if ((parseInt(end[0]) - parseInt(start[0]))  <= 1) {
      if ((parseInt(end[1]) + (12 - parseInt(start[1])))  <= 12) {
        sameYear = true;
        if (parseInt(start[2]) > parseInt(end[2])) {
          sameYearByDays = true;
        }
      }
    }

    // define what to print
    if (sameYear && start[0] == "2016") {
      if (start[1] == end[1]) {
        print = 1;
      } else {
        print = 2;
      }
    } else if (start[0] == end[0] && start[0] != "2016") {
      if (start[1] == end[1]) {
        print = 3;
        if (start[2] == end[2]) {
        print = 5;
      }
      } else {
        print = 4;
      }
    } else if (sameYearByDays) {
      print = 4;
    }
        console.log(print)

  for (var i = 0; i < arr.length; i++) {
    var startDate = arr[i].split("-");

    //Month
    var startMonth = month[parseInt(startDate[1]) - 1];

    //Day
    var startDay = startDate[2].split('');
    var startDayEnding = "";
    switch(startDay[startDay.length - 1]) {
      case "1":
        startDayEnding = "st";
        break;
      case "2":
        startDayEnding = "nd";
        break;
      case "3":
        startDayEnding = "rd";
        break;
      default:
        startDayEnding = "th";
        break;
    }
    if (startDate[2] == "13") {
      startDayEnding = "th";
    }
    startDay = parseInt(startDay.join('')) + startDayEnding;

    //Year
    var year = parseInt(startDate[0]);

    //push to return start date
    if (i === 0) {
      switch (print) {
        case 0:
          result[i] = startMonth + ' ' + startDay + ", " + year;
          break;
        case 1:
          result[i] = startMonth + ' ' + startDay;
          break;
        case 2:
          result[i] = startMonth + ' ' + startDay;
          break;
        case 3:
          result[i] = startMonth + ' ' + startDay + ", " + year;
          break;
        case 4:
          result[i] = startMonth + ' ' + startDay + ", " + year;
          break;
        case 5:
          result[i] = startMonth + ' ' + startDay + ", " + year;
          break;
      }
    }
      //push to return end date
    else if (i === 1) {
      switch (print) {
        case 0:
          result[i] = startMonth + ' ' + startDay + ", " + year;
          break;
        case 1:
          result[i] = startDay;
          break;
        case 2:
          result[i] = startMonth + ' ' + startDay;
          break;
        case 3:
          result[i] = startDay;
          break;
        case 4:
          result[i] = startMonth + ' ' + startDay;
          break;
        case 5:

          break;
    }
    }
  }

    // result[i] = startMonth + ' ' + startDay + ", " + year;

  return result;
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);

//Other test cases

// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"].
// makeFriendlyDates(["2016-12-01", "2017-02-03"]) should return ["December 1st","February 3rd"].
// makeFriendlyDates(["2016-12-01", "2018-02-03"]) should return ["December 1st, 2016","February 3rd, 2018"].
// makeFriendlyDates(["2017-03-01", "2017-05-05"]) should return ["March 1st, 2017","May 5th"]
// makeFriendlyDates(["2018-01-13", "2018-01-13"]) should return ["January 13th, 2018"].x
// makeFriendlyDates(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th"].x
// makeFriendlyDates(["2022-09-05", "2023-09-05"]) should return ["September 5th, 2022","September 5th, 2023"].
