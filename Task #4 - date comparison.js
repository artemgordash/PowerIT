/* Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). Go to the editor

Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2"
"Date1 > Date2"
"Date2 > Date1"
 */

const compare_dates = (firstDate, secondDate) => {
    if (firstDate.getTime() == secondDate.getTime()) console.log('Date1 = Date2')
    if (firstDate.getTime() < secondDate.getTime()) console.log('Date1 < Date2')
    if (firstDate.getTime() > secondDate.getTime()) console.log('Date1 > Date2')
}

compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))
