const text1 = "im learning Solidity";
const text2 = "im learning Ethereum";
const pattern1 = /Ethereum/;
console.log(pattern1.test(text1));
console.log(pattern1.test(text2));

const pattern2 = /ethereum/i;

console.log(pattern2.test("Ethereum"));
console.log(pattern2.test("ETHEREUM"));
console.log(pattern2.test("ethereum"));

const pattern3 = /\d/;

console.log(pattern3.test("Solidity"));
console.log(pattern3.test("Web3"));
console.log(pattern3.test("Ethereum2026"));

const pattern4 = /\w/;

console.log(pattern4.test("!!!"));
console.log(pattern4.test("Web3!"));
console.log(pattern4.test("___"));
console.log(pattern4.test(18));

const pattern5 = /\s/;

console.log(pattern5.test("HelloWorld"));
console.log(pattern5.test("Hello World"));
console.log(pattern5.test("Web 3"));

const pattern6 = /^Solidity/;

console.log(pattern6.test("Solidity is great"));
console.log(pattern6.test("I learn Solidity"));
console.log(pattern6.test("Solidity"));

const pattern7 = /Ethereum$/;

console.log(pattern7.test("I learn Ethereum")); 
console.log(pattern7.test("Ethereum is great")); 
console.log(pattern7.test("Ethereum"));

const pattern8 = /\d/;

console.log(pattern8.test("Solidity"));
console.log(pattern8.test("Solidity"));
console.log(pattern8.test("Web3"));
console.log(pattern8.test("2026"));

const pattern9 = /\d+/;
const pattern10 = /\d*/;

console.log(pattern9.test("Solidity")); 
console.log(pattern10.test("Solidity")); 

const pattern11 = /https?/;

console.log(pattern10.test("http"));
console.log(pattern10.test("https"));
console.log(pattern10.test("httpx"));

const pattern12 = /^https?$/;

console.log(pattern12.test("http"));  
console.log(pattern12.test("https")); 
console.log(pattern12.test("httpx"));

const pattern13 = /^\d{3}$/;

console.log(pattern13.test("123"));  
console.log(pattern13.test("12"));   
console.log(pattern13.test("12a4")); 

const pattern14 = /^\d{2,4}$/;

console.log(pattern14.test("7"));
console.log(pattern14.test("42"));
console.log(pattern14.test("2026"));
console.log(pattern14.test("12345"));

const pattern15 = /[abc]/;

console.log(pattern15.test("apple")); 
console.log(pattern15.test("cat"));   
console.log(pattern15.test("dog"));   

console.log(/[A-Z]/.test("solidity"));  
console.log(/[A-Z]/.test("Solidity"));  
console.log(/[a-z]/.test("ETH2026"));   

console.log(/[A-Za-z]/.test("2026"));
console.log(/[A-Za-z0-9]/.test("!!!"));
console.log(/[A-Za-z0-9]/.test("Web3!"));

console.log(/[^A-Z]/.test("HELLO"));
console.log(/[^A-Z]/.test("Hello"));
console.log(/[^0-9]/.test("12345"));

console.log(/a.c/.test("abc"));
console.log(/a.c/.test("ac"));
console.log(/a.c/.test("a-c"));


console.log(/^a.*c$/.test("ac"));
console.log(/^a.*c$/.test("abc"));
console.log(/^a.*c$/.test("abxyc"));

console.log(/^a.*c$/.test("ac"));
console.log(/^a.+c$/.test("ac"));
console.log(/^a.+c$/.test("abdfc"));

console.log("Web3 is great".match(/\d+/));
console.log("Ethereum28".match(/\d+/));
console.log("Version 25".match(/[A-Z][a-z]+/));

console.log("I learn Solidity and JavaScript".match(/[A-Z][a-z]+/));
console.log("web3 ethereum".match(/[A-Z][a-z]+/));


console.log("Solidity and JavaScript".match(/[A-Z][a-z]+/));
console.log("Solidity and JavaScript".match(/[A-Z][a-z]+/g));

const text = "cat cat cat";
console.log(text.replace(/cat/g, "dog"));

console.log("red,blue;green yellow".split(/[,; ]/));
console.log("red,blue;green yellow".split(/[,; ]+/));

console.log(/\bweb\b/i.test("I learn web development"));
console.log(/\bweb\b/i.test("website"));
console.log(/\bweb/i.test("website"));       

console.log(/\D/.test("123")); 
console.log(/\D/.test("12a")); 

console.log(/\W/.test("Web3"));  
console.log(/\W/.test("Web3!")); 
console.log(/\S/.test("   "));   

console.log(/./.test(""));             
console.log(/\./.test("a.b"));         
console.log(/\$/.test("price is $20")); 

const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{2,15}$/;

console.log(usernameRegex.test("Ali_123")); 
console.log(usernameRegex.test("7Ali"));    
console.log(usernameRegex.test("Al"));      
console.log(usernameRegex.test("Ali!"));    

console.log("SHalgham");

const result = "Date: 2026-10-10".match(/(\d{4})-(\d{2})-(\d{2})/);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);

const result1 = "BTC-500".match(/(?:BTC|ETH)-(\d+)/);

console.log(result1[0]);
console.log(result1[1]);

const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log(passwordRegex.test("password1"));
console.log(passwordRegex.test("Password1"));
console.log(passwordRegex.test("Pass1"));

const message = "Transaction: TX-84729, Status: Success";

console.log(message.match(/TX-\s*(\d+)/)[1]);
