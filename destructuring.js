/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];
//let john = ages[0]; - Not destructured
//let jomaryhn = ages[1]; - Not destructured
//let joe = ages[2]; - Not destructured
let [john, mary, joe] = ages;
console.log(john, mary, joe);
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets
//array
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

//object
let language2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "Japanese",
}

let {firstLanguage, thirdLanguage} = language2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
//array
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

//object
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"

};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);