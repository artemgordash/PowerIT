/* Напишите код который при открытии страницы запросит у пользователя его имя(prompt). 
После ввода имени, вывести ему сообщение `Привет ${name}`. 
Спросить у пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`, 
если его ответ Да и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет. */

const name = prompt('Please enter your name:');

alert(`Hello ${name}`)

const isKnowJS = confirm('Do you know JS');

if (isKnowJS) {
    alert('Well done!')
} else {
    alert('You can start learn right now!')
}