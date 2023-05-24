const minutesBlock = document.querySelector('.stopwatch__minutes')
const secondsBlock = document.querySelector('.stopwatch__seconds')
const millisecondsBlock = document.querySelector('.stopwatch__milliseconds')

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

export const startTimer = () => {
    milliseconds++
    millisecondsBlock.innerHTML = milliseconds;
    if (milliseconds > 99) {
        seconds++
        secondsBlock.innerHTML = '0' + seconds;
        milliseconds = 0
    }
    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++
        minutesBlock.innerHTML = '0' + minutes;
        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }
    if (minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }

}


