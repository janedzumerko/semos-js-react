const myComponent = "MY COMPONENT";

function mapStateToProps() {
	console.log("nekoja logika za react redux state props");
}

function connect(func) {
	func();
	return function(comp) {
		return "REDUX CONNECTED " + comp;
	}
}

// const vratenaFunkcija = connect(mapStateToProps);
// const newComponent = vratenaFunkcija(myComponent);

const newComponent = connect(mapStateToProps)(myComponent);
console.log(newComponent);