function getIncrement() {
	let counter = 0;
	return function increment() {
		counter++;
		return counter;
	};
}

let inc = getIncrement();
const a = inc();
const b = inc();
inc();
inc();
inc();
const c = inc();
console.log(`a : ${a} | b : ${b} | c : ${c}`); // a : 1 | b : 2 | c : 6
console.log(inc.counter); // undefined
