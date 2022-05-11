const clockHours = document.querySelector('.hours')
const clockMinutes = document.querySelector('.minutes')
const clockSeconds = document.querySelector('.seconds')
const clockStopButton = document.querySelector('.btn-stop')
const clockStartButton = document.querySelector('.btn-start')

const updateClock = () => {
    const time = new Date()
    clockHours.textContent = `${time.getHours()}`
    clockMinutes.textContent = `${time.getMinutes()}`
    clockSeconds.textContent = `${time.getSeconds()}`
}

let clockUpdateInterval = setInterval(updateClock, 100)

clockStartButton.addEventListener('click', () => {
    clockUpdateInterval = setInterval(updateClock, 100)
})

clockStopButton.addEventListener('click', () => {
    clearInterval(clockUpdateInterval)
})