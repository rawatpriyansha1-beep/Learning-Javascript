//let (Modern way – ES6)
/*
✅ Features:

Block scoped

Cannot be re-declared

Can be updated

Hoisted but not initialized
*/

let city = "Dehradun"
//let city = "Delhi" // Not Allowed ❌
city = "Hyderabad" // Allowed ✅
console.log("Value of {city} variable is: ", city)

let n = 0;

if (n == 0) {
    let age = "Is an Adult";
}
//console.log("value of {age} variable is :", age); // This is not Allowed ❌