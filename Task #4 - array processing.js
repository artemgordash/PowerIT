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