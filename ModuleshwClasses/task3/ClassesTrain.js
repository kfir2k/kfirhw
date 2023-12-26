

class Animal {
    constructor(name) {
        this.name = name
    }

    roar() {
        console.log(`${this.name} Makes noise`);
    }
}


let kfir = new Animal("kfir kotler");
kfir.roar()

let lavie = new Animal("lavie kotler")
lavie.roar()
