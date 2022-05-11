/* Задан объект
const weekDays = {
	“Luni”: “Mo”,
	“Marti”: “Tu”,
	“Miercuri”: “We”,
	“Joi”: “Th”,
	“Vineri”: “Fr”,
	“Simbata”: “Sa”,
	“Duminica”: “Su”
}
Напишите функцию которая получит как параметр этот объект и вернет следующий объект
const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Придумайте подходящее название для этой функции.
 */

const weekDays = {
	'Luni': 'Mo',
	'Marti': 'Tu',
	'Miercuri': 'We',
	'Joi': 'Th',
	'Vineri': 'Fr',
	'Simbata': 'Sa',
	'Duminica': 'Su'
}

const swap = (obj) => {
    const swapObject = {}
    Object.keys(obj).map(el => {
        const key = obj[el]
        swapObject[key] = el
    })
    return swapObject
}

console.log(swap(weekDays))
