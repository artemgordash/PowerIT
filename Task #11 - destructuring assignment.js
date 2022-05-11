/* 
Consider the following array:
let colors = ["white", "blue", "yellow", "black", "red", "green"];

Using array destructuring, assign the first 2 elements to firstColor and secondColor variables and assign the remaining elements to otherColors variable. Display the values of these 3 variables.

console.log(firstColor);
console.log(secondColor);
console.log(otherColors);
 */

const colors = ["white", "blue", "yellow", "black", "red", "green"];

const [firstColor, secondColor, ...otherColors] = colors

console.log(firstColor)
console.log(secondColor)
console.log(otherColors)
