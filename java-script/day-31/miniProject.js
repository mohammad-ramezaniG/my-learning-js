const employee1 = {
    name: "Ali",
    role: "Developer",
    salary: 5000,

    introduce() {
    console.log(`${this.name} is a ${this.role}`);
    },
    showSalary() {
        console.log(this.salary);
    },
    increaseSalary(amount) {
        this.salary = this.salary + amount;
        console.log(`New salary ${this.salary}`);
    },
    showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`Salary: ${this.salary}`);
    }
};

const employee2 = {
    name: "Reza",
    role: "Designer",
    salary: 4500,

    introduce() {
    console.log(`${this.name} is a ${this.role}`);
    },
    showSalary() {
        console.log(this.salary);
    },
    increaseSalary(amount) {
        this.salary = this.salary + amount;
        console.log(`New salary ${this.salary}`);
    },
    showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`Salary: ${this.salary}`);
    }
};

const employee3 = {
    name: "Narges",
    role: "Manager",
    salary: 7000,

    introduce() {
    console.log(`${this.name} is a ${this.role}`);
    },
    showSalary() {
        console.log(this.salary);
    },
    increaseSalary(amount) {
        this.salary += amount;
        console.log(`New salary ${this.salary}`);
    },
    showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`Salary: ${this.salary}`);
    },
    startWorkDay() {
    setTimeout(() => {
        console.log(`${this.name} has started working.`);
    }, 1000);
    }
};

function calculateBonus(percentage) {
    const bonus = this.salary * percentage / 100;

    console.log(`${this.name} Bonus: ${bonus}`);
}

calculateBonus.call(employee1 , 10);
calculateBonus.apply(employee2, [15]);

function showEmployeeInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Role: ${this.role}`);
    console.log(`Salary: ${this.salary}`);
}

const showNargesInfo = showEmployeeInfo.bind(employee3);
showNargesInfo();