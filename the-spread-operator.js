/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log("Second Array:", arr2);
console.log("First Array:", arr1);
// In this sequence - anything done to array 2 is also done to array 1.

// Copying an array
let arr3 = [4,5,6];
let arr4 = [...arr3];

arr4.push(7);
console.log("Third Array:", arr3);
console.log("Forth Array:", arr4);
/*In this sequence - The ...syntax spreads the values of the 3rd array into the 4th allowing you to create a new object 
so when you push a new item to the 4th array the 3rd remains untouched
*/

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
console.log("First Object:", obj1);
console.log("Second Object:", obj2);

//overriding part of the object
let obj3 = {...obj1, b: 5};
console.log("Third Object:", obj3);

// Copying only part of an array/object
let arr5 = [...arr1. {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5)