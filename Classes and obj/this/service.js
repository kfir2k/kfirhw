export class BankAccount {
	#balance
	
	constructor(firstB) {
		this.#balance = firstB
	}

	SetBalance(input) {
		this.#balance = input
	}
	GetBalance() {
		return this.#balance
	}

	Credit(amount) {
		this.#balance += amount
	}

	Debit(amount) {
		this.#balance -= amount
		
	}



}