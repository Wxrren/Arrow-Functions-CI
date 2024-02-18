/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    //Code block
    return a+b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    //Code block
    return a+b;
}

sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

//const addTwoNumbers2 = (a, b) => (a + b); Also Valid
const addTwoNumbers2 = (a, b) => (a + b)

// Implicit Returns

//Single parameter
const saySomething = message => console.log(message);
saySomething ('Hello there!...General Kenobi');

// No parameter
const sayHello = () => console.log('hello');

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());
