const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

const smallestThan = (array, number) => {
    array.forEach((el) => {
        if (el < number) console.log(el)
    })
}

const findMinValue = (array) => {
    return numbers.findIndex(el => el == Math.min(...array))
}

const sortUp = (array) => {
    return array.sort((a, b) => b - a)
}

const moreAverage = (array) => {
    const averageValue = array.reduce((current, next) => current + next, 0 / array.length)
    array.forEach(el => {
        if (el > averageValue) console.log(el)
    })
}
