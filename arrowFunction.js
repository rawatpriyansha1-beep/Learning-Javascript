// Syntax of arrow function and ways to write it 
// for arrow function hoisting doesn't works as it treats function name as a variable 

var x = 7;
console.log(x);

var getName = () => {
    console.log("Namaste Dosto, Kaise hai app log?")

}
console.log(getName());

var getName1 = function () {
    console.log("Mai theek hu Bhai tum batao");
}
console.log(getName1());
