const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 0)
    return date.getDate()
}

console.log(getDaysInMonth(5, 2022))