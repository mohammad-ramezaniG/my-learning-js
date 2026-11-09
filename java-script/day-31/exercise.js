"use strict";

const student = {
    name: "Mohammad",
    age: 19,

    showInfo() {
        console.log(this.name);
        console.log(this.age);
    }
};

const show = function introduce() {
    console.log(this.name);
    console.log(this.age);
};

// Method
student.showInfo();

// Independent function with call
show.call(student);


//تمرین 2
const product = {
    name: "Laptop",
    price: 1500,

    showPrice: function () {
        console.log(this.price);
    },

    showName: function() {
        console.log(this.name);
    },
    getPrice(){
        const show = () => {
            console.log(this.price);
        };

        show();
    }
};

product.showPrice();
product.showName();
product.getPrice();

function calculateSalary(bonus, tax) {
    const finalSalary = this.salary + bonus - tax;

    console.log(finalSalary);
}
const employee1 = {
    name: "Ali",
    salary: 5000
};

const employee2 = {
    name: "Reza",
    salary: 7000
};

const employee3 = {
    name: "Sara",
    salary: 9000
};

calculateSalary.call(employee1 , 500 , 100);
calculateSalary.apply(employee2 , [500 , 100])

const newCalculateSalary = calculateSalary.bind(employee3);
newCalculateSalary(500 , 100);