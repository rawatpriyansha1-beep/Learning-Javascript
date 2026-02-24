//const (Constant variable – ES6)
/*
✅ Features:

Block scoped

Cannot be re-declared

Cannot be updated

Must initialize while declaring
*/

const pi = 3.14
//const pi = 3.89 Not Allowed ❌
// pi = 15  Not Allowed ❌

console.log("Value of {pi} variable is: ", pi)

if (pi == 3.14) {
    const val = 4200
}
//console.log("Value of {val} variable is: ", val); Not Allowed ❌