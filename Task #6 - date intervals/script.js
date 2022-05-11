const inputDate = document.querySelector('#dateOfBirth')
const buttonDate = document.querySelector('#submitDateOfBirth')
const box = document.querySelector('.box')

buttonDate.addEventListener('click', () => {
    const duration_of_life_milliseconds = new Date() - new Date(inputDate.value)
    const duration_years = Math.floor(duration_of_life_milliseconds / 3.154e+10)
    const duration_months = Math.floor(duration_of_life_milliseconds / 2.628e+9)
    const duration_days = Math.floor(duration_of_life_milliseconds / 8.64e+7)
    const showLivedTime = box.appendChild(document.createElement('span'))
    showLivedTime.textContent = `Вы прожили ${duration_years} лет или ${duration_months} месяцев или ${duration_days} дней`
})