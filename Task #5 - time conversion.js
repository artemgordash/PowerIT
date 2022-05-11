/* Write a JavaScript function that will return the number of minutes in hours and minutes. Go to the editor

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
 */

const timeConvert = (minutes) => {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    return `${minutes} minutes = ${hour} hour(s) and ${minute} minute(s)`
}

console.log(timeConvert(1000))