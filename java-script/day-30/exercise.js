
//تمرین 1
function executeOperation(num1 ,num2 ,callback) {
    return callback(num1 , num2);
}

function sum(num1 , num2) {
    return num1 + num2;
}

function multiply(num1  , num2) {
    return num1 * num2;
}

function subtraction(num1 , num2 ) {
    return num1 - num2;
}

console.log(executeOperation(10 , 20 , sum));
console.log(executeOperation(10 , 20 , multiply));
console.log(executeOperation(10 , 20 , subtraction));


//تمرین 2
function processUser(name ,callback) {
    return callback(name);
}

function upperCase(name) {
    return name.toUpperCase();
}

function length1(name) {
    return name.length;
}

function wellcome(name) {
    return `Hello ${name}`;
}

console.log(processUser("Mohammad" , upperCase));
console.log(processUser("Mohammad" , length1));
console.log(processUser("Mohammad" , wellcome));

//تمرین 3
const x = 30;

//چون داخلی ترین متغیره

//تمرین 4
function createMultiplier(num1) {
    return function multiply(num2) {
        return num1 * num2
    }
};

const double = createMultiplier(2);
// double = function multiply(num2) {
//       return 2 * num2
//   }

console.log(double(5));
console.log(double(10));


//تمرین 5
function createScoreManager(firstCount) {
    let score = firstCount;

    return {
        addScore(amount) {
            score += amount;
        },

        removeScore(amount) {
            if (amount <= score) {
                score -= amount;
            }
        },

        getScore() {
            return score;
        }
    }
}

const scoreManager = createScoreManager(1000);

scoreManager.addScore(100);

console.log(scoreManager.getScore()); // 1100

scoreManager.removeScore(200);

console.log(scoreManager.getScore()); // 900