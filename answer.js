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

