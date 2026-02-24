var a = 100;// when this line is executed a becomes 100

{
    var a = 10;
    let b = 20;
    const c = 80;
    console.log("Inside Block Scope: ", a); // this is shadowing the global variable a , when this line is executed a becomes 10 in global scope due to it's hoisting properties for var variable type 
    console.log("Inside Block Scope: ", b);
    console.log("Inside Block Scope: ", c);
}

console.log("Outside Block Scope: ", a);

/*
Output:

*/
