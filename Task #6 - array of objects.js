/* Задан массив из точек [{x: 1, y: 2}, {x: 3, y: 4}, {x: null, y: 4}, {x: 3, y: undefined}]
Написать функцию которая удалит из массива все неправильно заданные точки и вернет массив из точек у которых координаты указаны правильно.
[{1, 2}, {3, 4}]
 */

const xy = [{x: 1, y: 2}, {x: 3, y: 4}, {x: undefined, y: 4}, {x: 3, y: undefined}]

const cleanInvalidValues = (array) => {
    return array.filter((el) => {
        return typeof(el.x) === 'number' && typeof(el.y) === 'number'
    })
}