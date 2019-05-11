class Person {
	constructor(name, course) {
		this.name = name;
		this.course = course;
	}

	getInfo() {
		return "Info za : " + this.name + " " + this.course;
	}
}

const p = new Person("Jane", "Semos");
const l = new Person("Pero", "Seavus");

console.log(p.getInfo());
console.log(l.getInfo());

