// simple calculator function program 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. Ask the first question
rl.question("Enter Value of a: ", (answer1) => {
    // 2. Ask the second question inside the first callback
    rl.question("Enter Value of b: ", (answer2) => {

        // Convert strings to numbers
        let a = Number(answer1);
        let b = Number(answer2);


        function add(x, y) {
            return x + y
        }
        console.log("Addition of two Numbers:", add(a, b)); // console.log("Addition of two Numbers:", add(9, 6));

        function Sub(x, y) {
            return x - y
        }
        console.log("Subtraction of two Numbers:", Sub(a, b));// OR console.log("Subtraction of two Numbers:",Sub(10, 7));

        function mul(x, y) {
            return x * y
        }

        console.log("Multiplication of two Numbers: ", mul(a, b));// OR console.log("Multiplication of two Numbers: ",mul(9,5))

        function div(x, y) {
            return x / y;
        }
        console.log("Division of two numbers: ", div(a, b));// OR console.log("Division of two numbers: ", div(50, 2));
        rl.close(); // ✅ close readline
    });
});