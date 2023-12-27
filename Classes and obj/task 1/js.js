class Animal {
    constructor(name) {
        this.name = name;

    }

    Roar() {
        console.log(`${this.name} Makes noise`);
    }
}

let myName = new Animal("kfir")
myName.Roar()
