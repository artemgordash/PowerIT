/* 
Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.
const dividers = (number) => {
//	your code here
}
 */

const deviders = (number) => {
    for (let i = 0; i <= number; i++) {
        if (number % i == 0) console.log(i)
    }
}

deviders(100)