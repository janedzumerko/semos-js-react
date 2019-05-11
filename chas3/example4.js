var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2 );

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const newArr = [];

for(let i = 0; i < array1.length; i++) {
	newArr.push(array1[i] * 2);
}

console.log(newArr);
// expected output: Array [2, 8, 18, 32]