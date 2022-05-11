/* Создайте 2 объект person со следующей структурой:
{
	name: `Person`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: ‘email@domain.com’
},
address: `Moldova`
}

Напишите метод Intersection который получит на входе эти 2 объекта и вернет новый объект только из тех полей значение которых равна о обоих объектов.
 */

const firstPerson = {
	name: `Jhon`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
    },
    address: `Moldova`,
}

const secondPerson = {
	name: `Jhon`,
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: `112`,
		email: 'email@domain.com'
    },
    address: `Moldova`,
}

const result = {}

const findEqualValues = (object1, object2, result) => {
	for (el in object1, object2) {
		if (typeof(object1[el]) == 'object' && object2.hasOwnProperty(el)) {
			result[el] = object1[el]
			findEqualValues(object1[el], object2[el], result[el])
		} else if (object1[el] == object1[el]) {
			result[el] = object1[el]
		}
	}
}

findEqualValues(firstPerson, secondPerson, result)
console.log(result)