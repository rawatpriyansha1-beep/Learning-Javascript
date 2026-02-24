// Scope in javascript is directly propotional to lexical enviroment

function a() {
    c()
    var val = 100;
    function c() {
        console.log(b);
    }
}
var b = 10;
a();
// console.log(val); // output : ReferenceError: val is not defined