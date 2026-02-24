var x = 1;
a();
b();
console.log("Value of {x} globally is :", x);
function a() {
    var x = 10;
    console.log("Value of x in function a:", x);
}
function b() {
    var x = 100;
    console.log("Value of x in function b is :", x)
}
/* output:
Value of x in function a: 10
Value of x in function b is : 100
Value of {x} globally is : 1
*/