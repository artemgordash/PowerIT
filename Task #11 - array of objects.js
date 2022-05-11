const form = [
    {
        name: 'Mark',
        marks: [5, 5, 2, 1, 10]
    },
    {
        name: 'Jhon',
        marks: [5, 1, 2, 1, 5]
    },
    {
        name: 'Elisabeth',
        marks: [5, 5, 10, 10, 10]
    },
    {
        name: 'Rick',
        marks: [1, 1, 1, 3, 10]
    },
    {
        name: 'Kayle',
        marks: [1, 5, 10, 1, 10]
    },
]


const formAverageMarks = [{}]
const findAverageMarks = (form) => {
    form.forEach((el, i) => {
        const name = el.name
        const averageMark = el.marks.reduce((a, b) => { return a + b }, 0) / el.marks.length
        formAverageMarks[i] = {
            name,
            averageMark,
        }
    })
}

const showBadAverages = (form) => {
    findAverageMarks(form)
    formAverageMarks.forEach(el => {
        if (el.averageMark < 5) console.log(el)
    })
}


// Можно так-же отсортировать с помощь .sort по убыванию и взять с конца самую мальенкую оценку и с начала самую большую
const showMinMaxMarkAverages = (form) => {
    findAverageMarks(form)
    let minMark, maxMark
    formAverageMarks.forEach((el) => {
        if (maxMark === undefined || el.averageMark > maxMark.averageMark) {
            maxMark = el
        }

        if (minMark === undefined || el.averageMark < minMark.averageMark) {
            minMark = el
        }

    })
    console.log(minMark)
    console.log(maxMark)
}

const sortUpAverages = (form) => {
    findAverageMarks(form)
    formAverageMarks.sort((a, b) => b.averageMark - a.averageMark)
    console.log(formAverageMarks)
}


/* findAverageMarks(form) */
/* showBadAverages(form) */
/* showMinMaxAverages(form) */
/* sortUpAverages(form) */