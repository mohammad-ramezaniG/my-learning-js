const age = prompt("Inter your age");
const name = prompt("Inter your name");

console.log(age);
console.log(name);

console.log(typeof(age));
console.log(typeof(name));

const age2 = Number(prompt("Inter your age"));
console.log(age2 + 5);
console.log(typeof(age2));

const num1 = Number(prompt("Enter number 1:"));
const num2 = Number(prompt("Enter number 2:"));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

const birth = Number(prompt("Enter your birth year:"));
const current = Number(prompt("Enter current year:"));

console.log(`your age is: ${current - birth}`);

const age3 = Number(prompt("Enter your age:"));
console.log(Number.isNaN(age3));

if (!Number.isNaN(age3)) {
    console.log("Valid age");
} else {
    console.log("Invalid age");
}

const age4 = Number(prompt("Enter your age:"));

if (Number.isNaN(age4)) {
    console.log("Invalid age");
} else if (age4 < 0 || age4 > 120) {
    console.log("Age out of range");
} else {
    console.log("Valid age");
}

let wallet = null;

if (wallet === null) {
    console.log("Wallet not connected");
} else {
    console.log("Wallet connected");
}

const developer = {
    name: "Mohammad",
    profile: {
        skill: "Solidity"
    }
};
console.log(developer.profile?.skill);
console.log(developer.profile?.experience);
console.log(developer.wallet?.address);

const developer1 = {
    name: "Mohammad",
    profile: {
        social: {
            github: "mohammad123"
        }
    }
};

console.log(developer1.name);
console.log(developer1.profile.social?.github);
console.log(developer1.profile.social?.Twitter);

const developer2 = {
    name: "Mohammad"
};
console.log(developer2.profile?.social?.github);

console.log(null ?? "Guest");
console.log(undefined ?? "Guest");
console.log("Mohammad" ?? "Guest");

console.log(0 ?? 100);
console.log(0 || 100);
console.log("" ?? "Default");

const developer5 = {
  name: "Mohammad",
  wallet: null,
  age: 0
};

console.log(developer5.wallet ?? "No Wallet");
console.log(developer5.age ?? 18);


const developer6 = {
  name: "Mohammad",
  profile: {
    social: {
      github: "mohammad-dev"
    }
  }
};

console.log(developer6.profile?.social?.github ?? "No GitHub");

