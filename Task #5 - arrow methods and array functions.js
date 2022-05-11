const numbers = [1, 2, 3, 4, 5, 6];

const convert = (fn, array) => {
    return array.map(fn)
}

const square = (x) => { return x * x }

convert(square, numbers)