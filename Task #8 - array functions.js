/* 
Задан массив
const colors = [“red”, “green”, “blue”];
Написать функцию
checkColor(color)
которая вернет позицию цвета в массиве если она есть или -1 если цвета нет.
 */

const colors = ['red', 'green', 'blue'];

const checkColor = (array, color, fromIndex = 0) => {
    return array.indexOf(color)
}

checkColor(colors, 'redd')