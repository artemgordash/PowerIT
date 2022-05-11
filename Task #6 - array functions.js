/*
Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9]. 
Используя одну функцию обработки массивов, из исходного массива нужно получить [1, 2, 3, 4, 0, 0, 0, 6, 7, 8, 9]
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const substituteInMiddle = (array, ...items) => {
    const middleIndex = array.length / 2;
    array.splice(middleIndex, 1, ...items)
}

substituteInMiddle(numbers, 0, 0, 0)
console.log(numbers)