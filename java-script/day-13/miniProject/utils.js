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

function getDeveloperType() {
    return "Software Developer" ;
}

export { getDeveloperType , isAdult ,getStudyLevel };