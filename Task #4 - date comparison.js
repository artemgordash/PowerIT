const compare_dates = (firstDate, secondDate) => {
    if (firstDate.getTime() == secondDate.getTime()) console.log('Date1 = Date2')
    if (firstDate.getTime() < secondDate.getTime()) console.log('Date1 < Date2')
    if (firstDate.getTime() > secondDate.getTime()) console.log('Date1 > Date2')
}

compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))
