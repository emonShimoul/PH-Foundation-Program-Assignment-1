//Question No. 1
function describeValue(value){
    if(value){
        return `${typeof(value)} || Truthy`;
    } else{
        return `${typeof(value)} || Falsy`;
    }
}

//Question No. 2
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

//Question No. 3
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

