/* Напишите код который проверит правильность username и password и выводит следующие сообщения:
Привет, если совпадает username и password
Неправильный пароль если username введен правильно а пароль нет
Неправильный username, если введен неправильный username
Ошибка Валидации, если ничего не введено
PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password)
 */

const user = {
    name: '12345',
    password: '12345',
}

const login = prompt('Login');
const password = prompt('Password');

if (login === user.name && password === user.password) {
    alert('Hello')
} else if (login === user.name && password !== user.password) {
    alert('Invalid password')
} else if (login !== user.name && password === user.password) {
    alert('Invalid login')
} else {
    alert('Error of validation')
}