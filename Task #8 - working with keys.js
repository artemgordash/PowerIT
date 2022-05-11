/* Задан объект 
const weekDays = {
	“Mo”: “Понедельник”,
	“Tu”: “Вторник”,
	“We”: “Среда”,
	“Th”: “Четверг”,
	“Fr”: “Пятница”,
	“Sa”: “Суббота”,
	“Su”: “Воскресенье”,
}

Напишите функцию translate которая переводит названия дней на румынском

const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Примечание: нельзя делать так weekDays[“mon”] = “Luni”
Используйте методы для работы с объектами или массивами.
 */

const weekDays = {
	'Mo': 'Понедельник',
	'Tu': 'Вторник',
	'We': 'Среда',
	'Th': 'Четверг',
	'Fr': 'Пятница',
	'Sa': 'Суббота',
	'Su': 'Воскресенье',
}

const translate = (object) => {
    let i = 0;
    for (day in object) {
        const daysRO = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata', 'Duminica']
        object[day] = daysRO[i]
        i++
    }
}

