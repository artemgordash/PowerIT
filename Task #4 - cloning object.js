/* Создайте объект user1 со следующей структурой:
{
	name: `User 1`,
	age: 123
}
Создайте пустой объект user2 и копируйте в него объект user1.
Замените в user 2 значения name = `User 2` и age = 321.
Выведите в консоль оба объекта. 
PS: Если у вас выведется 2 раза одинаковые значения, значит задача выполнена неправильно.
 */

const user1 = {
	name: `User 1`,
	age: 123,
}

const user2 = {}

for (el in user1) {
    user2[el] = user1[el]
}


user2.name = `User 2`
user2.age = 321

console.log(user1)
console.log(user2)