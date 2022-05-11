const xy = [{x: 1, y: 2}, {x: 3, y: 4}, {x: undefined, y: 4}, {x: 3, y: undefined}]

const cleanInvalidValues = (array) => {
    return array.filter((el) => {
        return typeof(el.x) === 'number' && typeof(el.y) === 'number'
    })
}