const developer = {
  name: "Mohammad",
  age: 0,
  wallet: null,
  profile: {
    social: {
      github: "mohammad-dev"
    }
  }
};
console.log(developer?.name ?? "Unknown Developer");
console.log(developer?.age ?? "Unknown Age");
console.log(developer?.wallet ?? "No Wallet");
console.log(developer?.profile?.social?.github ?? "No GitHub");


