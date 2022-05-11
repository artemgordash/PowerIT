const timer = document.querySelector('.timer');
const timerDaysInput = document.querySelector('.timer__days');
const timerHoursInput = document.querySelector('.timer__hours');
const timerMinutesInput = document.querySelector('.timer__minutes');
const timerSecondsInput = document.querySelector('.timer__seconds');
const timerStartButton = document.querySelector('.start');



timerStartButton.addEventListener('click', () => {
    if (timerDaysInput.value > 0 | timerHoursInput.value > 0 | timerMinutesInput.value > 0 | timerSecondsInput.value > 0) {
            const deadline = new Date();
            deadline.setDate(deadline.getDate() + (+timerDaysInput.value))
            deadline.setHours(deadline.getHours() + (+timerHoursInput.value))
            deadline.setMinutes(deadline.getMinutes() + (+timerMinutesInput.value))
            deadline.setSeconds(deadline.getSeconds() + (+timerSecondsInput.value))
            const updateTimer = () => {
                const currTime = new Date();
                const diff = deadline.getTime() - currTime.getTime();
                if (diff <= 0) {
                    clearInterval(timerIntervalID)
                    return alert('Time out');
                }
                const daysRemaining = Math.floor(diff / 1000 / 60 / 60 / 24);
                const hoursRemaining = Math.floor(diff / 1000 / 60 / 60) % 24;
                const minutesRemaining = Math.floor(diff / 1000 / 60) % 60;
                const secondsRemaining = Math.floor(diff / 1000) % 60;
                document.querySelector('.time-ramainig').textContent = `Осталось ${daysRemaining} дней, ${hoursRemaining} часов, ${minutesRemaining} минут, ${secondsRemaining} секунд`
            }
            updateTimer();
            const timerIntervalID  = setInterval(updateTimer, 100);
        
        }
});