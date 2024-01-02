export class BankAccount {
	#balance
	
	constructor(firstB) {
		this.#balance = firstB
	}

	setBalance(input) {
		this.#balance = input
	}
	getBalance() {
		return this.#balance
	}

	credit(amount) {
		this.#balance += amount
	}

	debit(amount) {
		this.#balance -= amount
		
	}



}