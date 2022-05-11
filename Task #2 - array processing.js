/* 
Создать массив который содержит минимум 10 чисел  (алгоритм должен работать для любого количества элементов)

[1, 5, 0, -5, 30, 100, -500, 0, 100, 55]

Написать следующие функции обработки этого массива: 
выводит числа < 5
находит позиции элементов с максимальным и минимальным значением
сортирует массив убыванию
выводит элементы массива которые имеют значение больше чем среднее арифметическое значение всех элементов массива

*/

const numbers = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

const showNumbersSmallestThan = (array, number) => {
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

const showMoreAverageValue = (array) => {
    const averageValue = array.reduce((current, next) => current + next, 0 / array.length)
    array.forEach(el => {
        if (el > averageValue) console.log(el)
    })
}
