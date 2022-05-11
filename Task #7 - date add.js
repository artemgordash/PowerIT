/* Write a JavaScript function to add specified years to a date.
Test Data :
dt = new Date(2014,10,2);
console.log(add_years(dt, 10).toString());
Output :
"Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
 */

date = new Date(2014, 10, 2);

const add_years = (date, years) => {
    return new Date(date.setFullYear(date.getFullYear() + years))
}

console.log(add_years(date, 10).toString());
