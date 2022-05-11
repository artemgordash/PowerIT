/* Напишите функцию sumInputNumbers(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

const sumInputNumbers = () => {
    const numbers = [];
    let userInput;
    while (userInput = prompt('Enter a number', '')) {
        if(userInput === '' || isNaN(userInput) || userInput === null) {
            alert('Invalid value')
            break;
        }
        numbers.push(+userInput)
    }

    const averageValue = numbers.reduce((current, next) => current + next, 0 / numbers.length)
    alert(`Sum is equal: ${averageValue}`)
}

sumInputNumbers()