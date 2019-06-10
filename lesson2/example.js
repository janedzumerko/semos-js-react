const arr = [1,2,3];

arr.push(4); // we can add elements in array and objects even they are const

console.log(arr);

const info = {
    school: "Semos",
    course: "JavaScript Academy"
}

info.tutor = "Jane";

console.log(info);

// but we can not assign new value


// arr = [1,2]; 
// !!! this is not allowed


// =========================================

const name = "Jane";

// name = "Petar"; // !!! we can not change variable name because it is const.
// name += "Hehe"; // !!! this is also not allowed.

// =========================================

const tmp = [5,6,7];
const newTmp = tmp; // with this we set pointer to both, 
// if we change one, the change will be in the other array also.
newTmp.push(8);

console.log(tmp);

// Use ... (spread operator)

const myArr = [2,3,4];
const newArr = [...myArr];

newArr.push(9);
console.log(newArr);
console.log(myArr);