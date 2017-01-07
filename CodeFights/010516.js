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

//
