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

