// Question No. 1
function describeValue(value){
    if(value){
        return `${typeof(value)} || Truthy`;
    } else{
        return `${typeof(value)} || Falsy`;
    }
}

// Question No. 2
function getDayType(value){
    switch(value.toLowerCase()){
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

// Question No. 3
function validateUsername (username){
    if(username.length < 4) {
        return "Too Short";
    } else if(username.includes(" ")) {
        return "No Space Allowed";
    } else if(username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}

// Question No. 4
function getCngFare(distance, isNight=false, waitingMinutes=0){
    let totalCost;
    if(distance<=2){
        totalCost = 50;
    } else{
        totalCost = 50 + ((distance - 2) * 15);
    }

    if(waitingMinutes > 0){
        totalCost = totalCost + waitingMinutes*2;
    }

    if(isNight){
        totalCost = totalCost + (totalCost * 20 / 100);
    }
    
    return totalCost;
}

// Question No. 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    if(runsNeeded <= 0){
        return "Won";
    } else if (ballsLeft <= 0){
        return "Lost";
    } else{
        let requiredRate = (runsNeeded / ballsLeft) * 6;

        if(requiredRate <= 6){
            return `Need ${runsNeeded} runs in ${ballsLeft} balls || Comfortable`;
        } else if(requiredRate > 6 && requiredRate <= 12){
            return `Need ${runsNeeded} runs in ${ballsLeft} balls || Tough`;
        } else{
            return `Need ${runsNeeded} runs in ${ballsLeft} balls || Almost Impossible`;
        }
    }
}
