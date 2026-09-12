function double(number) {
    return number * 2;
}

function isAdult(age) {
    return age >= 18
}

function getStudyLevel(hours) {
    
    if (hours >= 8) {
        return "advanced";
    } else if (hours >= 6) {
        return "intermediate";
    } else {
        return "beginner";
    }
}

export { double , isAdult ,getStudyLevel };

