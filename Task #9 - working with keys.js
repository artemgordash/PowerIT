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
