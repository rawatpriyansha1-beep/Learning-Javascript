

//============================================================================
///*
// For Loop Syntax Familarity

let val = 5;
let result = ""
for (let i = 1; i <= val; i++) {
    result += i + " ";
}
console.log(result.trim()); // trim() --> this function is used to remove extar spaces for the end 
//*/
//============================================================================
/*
// For Loop in Javascript for Array

let arr = [10, 3, 23, 93, 21, 34, 2];
let result = "";

for (let value of arr) {
    result += value + " ";
}
console.log(result.trim()); // .trim() removes the extra space at the very end

*/
//============================================================================
/*
// For Loop in Dictionary
let person = {
    name: "Priyansha",
    age: 22,
    Laptor: true,
    Coder: "Yess!"
};

for (let key in person) {
    console.log(key + ":" + person[key]);
}
*/