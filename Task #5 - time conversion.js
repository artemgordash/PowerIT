const timeConvert = (minutes) => {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    return `${minutes} minutes = ${hour} hour(s) and ${minute} minute(s)`
}

console.log(timeConvert(1000))