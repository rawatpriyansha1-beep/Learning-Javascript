//var (Old way – ES5)

/*
✅ Features:

Function scoped

Can be re-declared

Can be updated

Gets hoisted (moved to top internally)
*/

var name = "Priansha";
var name = "rawat"; // This is allowed ✅

name = "Yashi Rawat";

console.log("print name :", name);

var val = true

if (val == true) {
    var result = "value of {val} varibale is true ";

}
console.log("result variable contains: ", result) // Result variable is accessible outside the block ❌ {It can create Bugs}

