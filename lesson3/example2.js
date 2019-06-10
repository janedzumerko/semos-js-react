function Person(name, course) {
	this.name = name;
	this.course = course;
}

Person.prototype.getInfo = function() {
	return "Info za : " + this.name + " " + this.course;
}

const p = new Person("Jane", "Semos");
const m = new Person("Pero", "Seavus");

// console.log(p);
console.log(p.getInfo());

console.log(m.getInfo());