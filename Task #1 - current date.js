const curday = (separator) => {
    const currentTime = new Date()
    return [currentTime.getUTCDate(), currentTime.getUTCMonth(), currentTime.getUTCFullYear()].join(separator)
}

console.log(curday('-'))