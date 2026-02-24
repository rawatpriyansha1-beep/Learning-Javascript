let a = 90;
let b = 800;

console.log("Value of as a global variable is : ", a)
console.log("Value of a as a global variable is : ", b)

fun1();

function fun1() {
    let a = 10;
    console.log("Addition of local scope a and global scope b is : ", a + b);

}

console.log("Addition of global scope a and global scope b is : ", a + b);