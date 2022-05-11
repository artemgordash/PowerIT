const month_name = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[date.getUTCMonth()]
}

console.log(month_name(new Date('2/11/2022')))