const numbers = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSorted = (array) => {
    const arraySorted = array.sort((a, b) => a - b);
    const arrayCleared = arraySorted.filter((item, index) => numbers.indexOf(item) == index)
    return arrayCleared
}

