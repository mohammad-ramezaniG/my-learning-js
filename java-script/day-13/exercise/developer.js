import { isAdult , getStudyLevel } from "./utils.js";


class Developer {
    constructor(name , age , hoursPerDay) {
        this.name = name;
        this.age = age;
        this.hoursPerDay = hoursPerDay
    }

    introduce() {
        return `Hi, I am ${this.name}`;
    }

    isAdult() {
        return isAdult(this.age);

    }

    getStudyLevel() {
        return getStudyLevel(this.hoursPerDay);
    }
}

export default Developer;
export {getStudyLevel};