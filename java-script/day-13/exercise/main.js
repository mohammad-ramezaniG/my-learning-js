import Developer, { getStudyLevel } from "./developer.js";
import { double , isAdult } from "./utils.js";

const developer1 = new Developer("Mohammad" , 19 , 8);

console.log(developer1.isAdult());
console.log(developer1.getStudyLevel());
console.log(getStudyLevel(6));

