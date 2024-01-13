class SportsEvent{

	name;
	participantsAmount;
	contestDate


	constructor(evant) {
		
	}

	printVariables() {
		console.log(`${this.name} ${this.participantsAmount} ${this.contestDate}`);
	}



}


class Athletics extends SportsEvent{
	runningShoes
	shirtNumber
	

	super(evant)

	run() {
		console.log(`running ${this.name} ${this.participantsAmount} ${this.contestDate}`);
	}


}

class Swimming extends SportsEvent {
	goggles
	divingFins
	swim() {
		
	}


}



export {
	SportsEvent,
	Athletics,
	Swimming
}