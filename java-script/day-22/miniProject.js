const report1 = {
TransactionID: "TX-2026-AB123",
Wallet: "0x52908400098527886E0F7030069857D2E4169EE7",
User: "Mohammad_Dev7",
Amount: "250.75 ETH",
Status: "SUCCESS",
Email: "mohammad.dev@example.com"
};
const report2 = {
TransactionID: "TX-2026-CD456",
Wallet: "0x123invalid",
User: "7Ali",
Amount: "40 ETH",
Status: "Failed",
Email: "invalid-email"
};

const password = "SecurePass2026";

const transactionIDRegex = /^TX-\d{4}-[A-Z]{2}[A-Z0-9]{3}$/;
const transactionID1 = transactionIDRegex.test(report1.TransactionID);
const transactionID2 = transactionIDRegex.test(report2.TransactionID);
console.log("Cheking TransactionID...");
console.log(transactionID1);
console.log(transactionID2);

const walletRegex = /^0x[A-Fa-f0-9]{40}$/;
const wallet1 = walletRegex.test(report1.Wallet);
const wallet2 = walletRegex.test(report2.Wallet);
console.log("Cheking Wallet...");
console.log(wallet1);
console.log(wallet2);

const userRegex = /^[A-Za-z]\w{2,15}$/;
const user1 = userRegex.test(report1.User);
const user2 = userRegex.test(report2.User);
console.log("Cheking User...");
console.log(user1);
console.log(user2);

const passwordRegex = /^(?=.+[A-Z])(?=.+\d).{8,}$/;
console.log("Cheking Password...");
console.log(passwordRegex.test("SecurePass2026"));
console.log(passwordRegex.test("securepass2026"));
console.log(passwordRegex.test("SecurePass"));
console.log(passwordRegex.test("Ab1"));

const walletText = `
Wallet A: 0x52908400098527886E0F7030069857D2E4169EE7
Wallet B: 0x123invalid
Wallet C: 0xde709f2102306220921060314715629080e2fb77
`;
const walletTextRegex = /0x[A-Fa-f0-9]{40}/g;
const wallets = walletText.match(walletTextRegex);
console.log(wallets);

const amountText = `
Amount: 250.75 ETH
Amount: 40 ETH
Amount: 0.5 ETH
Amount: 1200 ETH
`;

const amountRegex = /\d+(\.\d+)?/g;
const amount = amountText.match(amountRegex);
console.log(amount);

const statusText = `
Transaction status: SUCCESS
Transaction status: Failed
The transaction was unsuccessful.
Status: success
Status: FAILED
`;

const statusRegex = /\b(success|failed)\b/ig;
const status = statusText.match(statusRegex);
console.log(status);

const emailText = `
Contact: mohammad.dev@example.com
Backup: ali_22@test.org
Invalid: not-an-email
`;

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/g;

let result = emailRegex.exec(emailText);

while (result !== null) {
  console.log(result[0]);
  result = emailRegex.exec(emailText);
}

const emailText = "Contact: mohammad.dev@example.com";

const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9]+\.[A-Za-z]{2,}/g;

const hiddenText = emailText.replace(
  emailRegex,
  "[EMAIL HIDDEN]"
);

console.log(hiddenText);

const text = "ETH, BTC; SOL USDC";

const coins = text.split(/[,; ]+/);

console.log(coins);
