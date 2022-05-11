/* 
Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом. Например:
ucFirst("вася") == "Вася";
 */

const ucFirst = (str) => console.log(str[0].toUpperCase() + str.slice(1));