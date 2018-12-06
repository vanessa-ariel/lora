// WORD GENERATOR
const randomWords = [
    "palavra1",
    "palavra2",
    "palavra3",
    "palavra4",
    "palavra5",
]
function getWord(){
    const index = Math.floor(Math.random() * ((randomWords.length - 1) - 0 + 1)) + 0;
    const selectedWord = randomWords[index];
    const displayWords = document.querySelector('.display-words')
    displayWords.innerHTML = selectedWord;
}
getWord()

document.body.onkeyup = function(e){
    if(e.keyCode === 32){
        getWord()
    }
}

// TIMER
let hourInput = document.getElementById('hour')
let minInput = document.getElementById('min')
let isPlaying = false


let c = localStorage.getItem('timer')
let parsedHour = JSON.parse(c)
console.log(parsedHour)


let count =  ((parsedHour.hora * 60) * 60) + parsedHour.minutos * 60

function setTimerValue(hora, minutos, segundos = '00') {
    const timerCountdown = document.querySelector('.display-countdown')
    timerCountdown.innerHTML = hora.toString().padStart(2, '0') + ":" + minutos + ":" + segundos
}

setTimerValue(parsedHour.hora, parsedHour.minutos);
// timerCountdown.innerHTML = parsedHour.hora + ":" + parsedHour.minutos


// START TIMER
function timer() {
    if(isPlaying){
        count = count - 1;
        if (count == -1) {
            clearInterval(counter) //duvida
            return
        }

        let seconds = count % 60
        let minutes = Math.floor(count / 60)
        let hours = Math.floor(minutes / 60)
        minutes %= 60
        hours %= 60
        setTimerValue(hours, minutes, seconds);
    }
}

function play(){
    isPlaying = true
}

function pause() {  
    isPlaying = false
}

let counter;

function handlePress() {
    if (isPlaying) {
        pause()
        clearInterval(counter)
    } else {
        play()
        counter = setInterval(timer, 1000)
    }
}