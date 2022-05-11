/* 
Напиши функцию convert(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
function square(x) { return x * x; } // возведение в квадрат
console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(convert(square, [])); // []
Обрати внимание: функция не должна изменять переданный ей массив:

let arr = [1, 2, 3];
console.log(convert(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
*/

const numbers = [1, 2, 3, 4, 5, 6];

const convert = (fn, array) => {
    return array.map(fn)
}

const square = (x) => { return x * x }

convert(square, numbers)