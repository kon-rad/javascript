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
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var result = [];

    var findDayOfWeek = function(date){
        var dateObj = new Date(date);
        var day = dateObj.getDay();
        return day;
    }

    var convertInputToDateObjFormat = function(date) {
        var formattedDate = [];
        date = date.split('');
        var day = date.splice(0, 2);
        var month = date.splice(1,2);
        var year = date.splice(2);
        formattedDate.push(year.join(''));
        formattedDate.push(month.join(''));
        formattedDate.push(day.join(''));

        return formattedDate ;
    }

    for (var i = 0; i < n; i++) {
        result.push()
    }
}
