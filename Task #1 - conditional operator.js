/* 
Переменная n хранит целое число от 0 до 9. 
Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово 
(Например, если n равно 3, то будет выводиться слово «три»)
 */

const n = 5;

switch (n) {
    case 0:
        console.log('Zero')
        break;
    case 1:
        console.log('One')
        break;
    case 2:
        console.log('Two')
        break;
    case 3:
        console.log('Three')
        break;
    case 4:
        console.log('Four')
        break;
    case 5:
        console.log('Five')
        break;
    case 6:
        console.log('Six')
        break;
    case 7:
        console.log('Seven')
        break;
    case 8:
        console.log('Eight')
        break;
    case 9:
        console.log('Nine')
        break;

    default:
        break;
}