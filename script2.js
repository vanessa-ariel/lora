// WORD GENERATOR
const randomWords = [
    "palavra1",
    "palavra2",
    "palavra3",
    "palavra4",
    "palavra5",
]

document.body.onkeyup = function(e){
    if(e.keyCode === 32){
        const index = Math.floor(Math.random() * ((randomWords.length - 1) - 0 + 1)) + 0;
        const selectedWord = randomWords[index];
        const displayWords = document.querySelector('.display-words')
        displayWords.innerHTML = selectedWord;
    }
}

// TIMER
let hourInput = document.getElementById('hour')
let minInput = document.getElementById('min')
let isPlaying = false

const timerCountdown = document.querySelector('.display-countdown')

let c = localStorage.getItem('timer')
let parsedHour = JSON.parse(c)
console.log(parsedHour)

timerCountdown.innerHTML = parsedHour.hora + ":" + parsedHour.minutos

let count =  ((parsedHour.hora * 60) * 60) + parsedHour.minutos * 60

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

        timerCountdown.innerHTML = hours + ":" + minutes + ":" + seconds
    }
}

function play(){
    isPlaying = true
}

function pause() {  
    isPlaying = false
}

let counter = setInterval(timer, 1000)

function handlePress() {
    if (isPlaying) {
        pause()
        clearInterval(counter)
    } else {
        play()
        counter = setInterval(timer, 1000)
    }
}