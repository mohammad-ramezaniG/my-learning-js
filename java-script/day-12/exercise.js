class Developer {
    constructor(name,goal,hoursPerDay) {
        this.name = name;
        this.goal = goal;
        this.hoursPerDay = hoursPerDay
        this.initialHours = hoursPerDay
    }
    
    introduce() {
        
        return `Hi.I am ${this.name} and my goal is to become a ${this.goal}`;

    }

    study() {

        return `${this.name} studies ${this.hoursPerDay} hours per day.`;
    }

    isReady() {

        if (this.hoursPerDay >= 6) {
            return true;
        } else {
            return false;
        }
    }

    increaseStudyHours(hours) {
        
        this.hoursPerDay = this.hoursPerDay + hours;
    }

    canStudyMore() {

        if (this.hoursPerDay > 8) {
            return true;
        } else{
            return false;
        }
    }

    getStatus() {

        if (this.hoursPerDay >= 6) {

            return `${this.name} is ready to learn`;
            
        } else {

            return `${this.name} needs to study more`;
            
        }
    }

    compareWith(otherDeveloper) {
        if (this.hoursPerDay > otherDeveloper.hoursPerDay) {

            return `${this.name} studies more than ${otherDeveloper.name}`;
            
        } else if (this.hoursPerDay < otherDeveloper.hoursPerDay) {
            
            return `${this.name} studies less than ${otherDeveloper.name}`;
            
        } else{

            return `${this.name} and ${otherDeveloper.name} study the same amount`;
            
        }
    }
    
    resetStudyHours() {
         this.hoursPerDay = this.initialHours;
    }

    changeGoal(newGoal) {
        this.goal = newGoal;
    }

    hasGoal(targetGoal) {
        return this.goal === targetGoal ;
    }

    getProfile() {
        return {
            name: this.name,
            goal: this.goal,
            hoursPerDay: this.hoursPerDay
        }
    }
    static getDeveloperType() {
        return "Software Developer";
    }

    levelUp() {
        if (this.canLevelUp()) {
            this.hoursPerDay = this.hoursPerDay + 1
        }
    }

    canLevelUp() {
        return this.hoursPerDay < 10;
    }

    getSummary() {
        return {
            name: this.name,
            goal: this.goal,
            isReady: this.isReady()
    }
    }

    changeGoalAndLevelUp(newGoal) {
        this.levelUp();
        this.goal = newGoal;
    }
}

const developer1 = new Developer("Mohammad","Smart Contract Developer", 8);
const developer2 = new Developer("Narges","AI Engineer", 6);

console.log(developer1);
console.log(developer2);

console.log(developer1.introduce());
console.log(developer2.introduce());

console.log(developer1.study());
console.log(developer2.study());

console.log(developer1.isReady());
console.log(developer2.isReady());

developer1.increaseStudyHours(2);
developer2.increaseStudyHours(3);

console.log(developer1.hoursPerDay);
console.log(developer2.hoursPerDay);

const developer3 = new Developer("Ali", "JavaScript" , 8);

console.log(developer3.canStudyMore());
developer3.increaseStudyHours(2);
console.log(developer3.canStudyMore());


console.log(developer1.getStatus());
console.log(developer2.getStatus());


console.log(developer1.compareWith(developer2));
console.log(developer2.compareWith(developer1));


console.log(developer1.hoursPerDay);

developer1.increaseStudyHours(2);
console.log(developer1.hoursPerDay);

developer1.resetStudyHours();
console.log(developer1.hoursPerDay);

console.log(developer1.goal);

developer1.changeGoal("AI Engineer");

console.log(developer1.goal);
console.log(developer1.introduce());


developer1.hoursPerDay = 9;

developer1.levelUp();

console.log(developer1.hoursPerDay);

developer1.levelUp();

console.log(developer1.hoursPerDay);



