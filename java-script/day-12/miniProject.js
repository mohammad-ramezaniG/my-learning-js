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

const developer1 = new Developer("Mohammad", "Smart Contract Developer", 8);
const developer2 = new Developer("Narges", "AI Engineer", 6);
const developer3 = new Developer("Ali", "JavaScript Developer", 5);

developer3.increaseStudyHours(3);
developer3.canLevelUp();
console.log(developer3.levelUp(););



developer2.changeGoal("Machine Learning Engineer");

console.log(developer1.getSummary());
console.log(developer2.getSummary());

console.log(developer1.compareWith(developer2));

console.log(Developer.getDeveloperType());




