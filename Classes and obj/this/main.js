import { BankAccount } from "./service.js";



let account1 = new BankAccount(-200)
let account2 = new BankAccount(25)
let account3 = new BankAccount(-200)

console.log(`Accounts ${account1.getBalance()},${account2.getBalance()},${account3.getBalance()}`);


account1.setBalance(99.99)
account2.setBalance(500)
account3.setBalance(0)


console.log(`Accounts ${account1.getBalance()},${account2.getBalance()},${account3.getBalance()}`);


account1.credit(50)
account2.debit(100)


console.log(`Accounts ${account1.getBalance()},${account2.getBalance()},${account3.getBalance()}`);




