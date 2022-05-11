/* Write a JavaScript function to get the current date. 
Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2022"
"11-13-2022"
 */

const curday = (separator) => {
    const currentTime = new Date()
    return [currentTime.getUTCDate(), currentTime.getUTCMonth(), currentTime.getUTCFullYear()].join(separator)
}

console.log(curday('-'))