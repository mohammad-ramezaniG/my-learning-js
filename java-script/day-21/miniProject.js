const developer = {
  name: "Mohammad",
  age: 20,
  skill: "Solidity",
  wallet: {
    address: "0x123ABC",
    network: "Ethereum"
  }
};

function analyzeDeveloper({name , age , wallet}) {
    const {address , network} = wallet;
    console.log(name);
    console.log(age);
    console.log(address);
    console.log(network);
};

analyzeDeveloper(developer)