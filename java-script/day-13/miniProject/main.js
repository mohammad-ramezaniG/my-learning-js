import Developer from "./developer.js";

const developer1 = new Developer("Mohammad" , 19 , 8);
const developer2 = new Developer("Narges" , 17 , 6);

console.log(developer1.introduce());
console.log(developer1.isAdult());
console.log(developer1.getStudyLevel());
console.log(developer1.getDeveloperType());

console.log(developer2.introduce());
console.log(developer2.isAdult());
console.log(developer2.getStudyLevel());
console.log(developer2.getDeveloperType());




