class Animal {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	makeSound() {
		return this.type + " makes grrr";
	}
}

const p = new Animal("Grizli", "Bear");
const m = new Animal("Ghost", "Wolf");
// console.log(m);
// console.log(p.makeSound());

let someFunctionName = p.makeSound;

someFunctionName = someFunctionName.bind(p);

console.log(someFunctionName());