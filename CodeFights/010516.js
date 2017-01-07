function tasksTypes(deadlines, day) {

    var today  =[];
    var upcoming = [];
    var later = [];
    var result = [];

    for (var i = 0; i < deadlines.length; i++) {
        if (deadlines[i] <= day) {
            today.push(deadlines[i]);
        }
        else if(deadlines[i] > day && deadlines[i] <= (day + 7)) {
            upcoming.push(deadlines[i]);
        } else {
            later.push(deadlines[i]);
        }

    }
    if (today.length == null) {
        result.push(0);
    } else {
        result.push(today.length);
    }
    if (upcoming.length == null) {
        result.push(0);
    } else {
        result.push(upcoming.length);
    }
    if (later.length == null) {
        result.push(0);
    } else {
        result.push(later.length);
    }
    return result;

}
// Smart workload feature

function smartAssigning(names, statuses, projects, tasks) {
    var availability = [];
    var result = 0,
        highestIndex;

    for (var i = 0; i < names.length; i++) {
        if (statuses[i]) {
          availability[i] += 1000;
        } else {
          availability[i] = 0;
        }
        availability[i] += (1000 - (tasks[i] * 10));
        availability[i] += (100 - (projects[i]));
    }

    for (var j = 0; j < availability.length; j++) {
        if (availability[j] > result) {
            result = availability[j];
            highestIndex = j;
        }
    }
    return names[highestIndex];
}

// Recurring Task

function recurringTask(firstDate, k, daysOfTheWeek, n) {
    var dw = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var daysDiff, nextDateObjF, nextDayString;

    // helper functions

    var betweenDays = function(day1String, day2String) {
      day1Index = dw.indexOf(day1String);
      day2Index = dw.indexOf(day2String);
      if (day1Index < day2Index)
        return day2Index - day1Index;
      else
        return (7 - day1Index) + day2Index;
    }

    var convertInputToDateObjFormat = function(id) {
        var formattedDate = [];
        id = id.split('');
        var day = id[0] + id[1];
        var mon = id[3] + id[4];
        var year = id[6] + id[7] + id[8] + id[9];
        formattedDate.push(day).push(mon).push(year);
        return formattedDate;
    }

    var findDayOfWeek = function(date) {
      var dateObj = new Date(date[0], date[1], date[2]);
      return date.getDate();
    }

    var findNextDate = function(startDate, k) {
      var daysToAdd = k;
      var newDate = new Date(startDate[0], startDate[1], startDate[2]);
      newDate.setDate(newDate.getDate() + daysToAdd);
      return newDate;
    }

    var convertDateObjtoOutput = function(date) {
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      return dd+ "/" + mm + "/" + yyyy;
    }



    var dow001ObjF = convertInputToDateObjFormat(firstDate);
    var dow001String = dw[findDayOfWeek(dow001Obj)];
    var daysPerWeek = daysOfTheWeek.length;
    var positionOfDay = daysOfTheWeek.indexOf(dow001String);
    var results = [firstDate];
    var originalPos = positionOfDay;
    positionOfDay++;

    while(results.length < n ) {
      if(results.length < daysPerWeek) {
        if(daysOfTheWeek[positionOfDay] !== undefined && positionOfDay != originalPos) {
          nextDayString = daysOfTheWeek[positionOfDay];
        } else if (positionOfDay != originalPos) {
            positionOfDay = 0;
            nextDayString = daysOfTheWeek[positionOfDay];
        }
        daysDiff = betweenDays(dow001String, nextDayString);
        nextDateObjF = findNextDate(dow001ObjF, daysDiff);
        results.push(convertDateObjToOutput(nextDateObj));
        dow001String = nextDayString;
        dow001ObjF = convertInputToDateObjFormat(convertDateObjToOutput(nextDateObjF));
        positionOfDay++;
      }
      nextDateObj = findNextDate(dow001ObjF, (k * 7));
      results.push(convertDateObjToOutput(nextDate));
    }
    return results;
}
recurringTask();
