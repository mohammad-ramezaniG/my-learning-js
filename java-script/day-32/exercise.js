const animal = {
    eat() {
        console.log("Eating...");
    }
};
const animal2 = {
    eat2()  {
        console.log("Eating...2");
    }
}

const dog = {
    bark() {
        console.log("Woof!");
    }
};

Object.setPrototypeOf(dog, animal);

dog.bark();
dog.eat();
console.log(dog.__proto__);
console.log(Object.getPrototypeOf(dog));

Object.setPrototypeOf(dog, animal2);

console.log(Object.getPrototypeOf(dog));

dog.bark();

dog.eat2();

//تمرین 1
const vehicle = {
    type: "Unknown",
    speed: 0,

    move() {
        console.log(`${this.type} is on the road`);
    }
};

const car = {
    type: "Mercedes",
    speed: 100,

    brand() {
        console.log("Car's brand is Benz");
    }
};

Object.setPrototypeOf(car, vehicle);

car.move();
car.brand();

console.log(Object.getPrototypeOf(car));

console.log(Object.hasOwn(car, "move"));
console.log(Object.hasOwn(vehicle, "move"));

//تمرین 2
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

Student.prototype.introduce = function () {
    console.log(
        `Hi I'm ${this.name}, my age is ${this.age} and I'm in ${this.grade} grade.`
    );
};

const student1 = new Student("Mohammad", 19, "term 1");
const student2 = new Student("Ali", 21, "term 5");
const student3 = new Student("Narges", 17, "11th");

student1.introduce();
student2.introduce();
student3.introduce();

console.log(
    student1.introduce === student2.introduce &&
    student2.introduce === student3.introduce
);

//تمرین 3
const Animal = {
    eat() {
        console.log("Eating...");
    }
}

const  Dog = {
    bark() {
        console.log("Woof!");
    }
}

const Puppy = {
    play() {
        console.log("Playing...");
    }
}

Object.setPrototypeOf(Dog , Animal);
Object.setPrototypeOf(Puppy , Dog);

console.log(Object.getPrototypeOf(Puppy));
console.log(Object.getPrototypeOf(Dog));

console.log(Object.hasOwn(Puppy , "eat"));
console.log(Object.hasOwn(Puppy , "bark"));
console.log(Object.hasOwn(Puppy , "play"));

Puppy.eat()

//تمرین 4
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

const product1 = new Product("cheese", 10);
const product2 = new Product("butter", 12);

Product.prototype.introduce = function () {
    console.log(`Product's name: ${this.name}`);
};

// Shared method
console.log(product1.getPrice === product2.getPrice);

// Prototype
console.log(
    Object.getPrototypeOf(product1) === Product.prototype
);

// Own properties
console.log(Object.hasOwn(product1, "name"));
console.log(Object.hasOwn(product1, "getPrice"));

// New shared method
product1.introduce();
product2.introduce();

console.log(Object.getPrototypeOf(product1));


