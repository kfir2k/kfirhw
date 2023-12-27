import { BankAccount } from "./service.js";



let account1 = new BankAccount(-200)
let account2 = new BankAccount(25)
let account3 = new BankAccount(-200)

console.log(`Accounts ${account1.GetBalance()},${account2.GetBalance()},${account3.GetBalance()}`);


account1.SetBalance(99.99)
account2.SetBalance(500)
account3.SetBalance(0)


console.log(`Accounts ${account1.GetBalance()},${account2.GetBalance()},${account3.GetBalance()}`);


account1.Credit(50)
account2.Debit(100)


console.log(`Accounts ${account1.GetBalance()},${account2.GetBalance()},${account3.GetBalance()}`);




