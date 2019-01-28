// WORD GENERATOR
const randomWords = [
    "Cena de filme",
    "Uma flor",
    "Uma heroína",
    "Algo pequeno",
    "Um sonho",
    "Seu humor",
    "Um dia chuvoso",
    "Sua comida favorita",
    "Algo na sua mochila",
    "Algo que ama desenhar",
    "Um lugar que sonha visitar",
    "Estilo de outro artista",
    "Um lugar especial",
    "Seu objeto favorito",
    "Uma lembrança inesquecível"
]
function getWord(){
    const index = Math.floor(Math.random() * ((randomWords.length - 1) - 0 + 1)) + 0;
    const selectedWord = randomWords[index];
    const displayWords = document.querySelector('.display-words');
    displayWords.innerHTML = selectedWord;
}
getWord();

document.body.onkeyup = function(e){
    e.preventDefault();
    if(e.keyCode === 32){
        getWord();
    }
}

// TIMER
let hourInput = document.getElementById('hour');
let minInput = document.getElementById('min');
let isPlaying = false;
let getTimerInput = localStorage.getItem('timer');
let parsedHour = JSON.parse(getTimerInput);
let count =  ((parsedHour.hora * 60) * 60) + parsedHour.minutos * 60;

function setTimerValue(hora, minutos, segundos = '00') {
    const timerCountdown = document.querySelector('.display-countdown');
    timerCountdown.innerHTML = hora.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
}

setTimerValue(parsedHour.hora, parsedHour.minutos);
// timerCountdown.innerHTML = parsedHour.hora + ":" + parsedHour.minutos

// START TIMER
function timer() {
    if(isPlaying){
        count = count - 1;
        if (count == -1) {
            clearInterval(counter);
            return
        }
        else{
            let seconds = count % 60;
            let minutes = Math.floor(count / 60);
            let hours = Math.floor(minutes / 60);
            minutes %= 60;
            hours %= 60;
            setTimerValue(hours, minutes, seconds);
        }
    }
}

function play(){
    isPlaying = true;
}
function pause() {  
    isPlaying = false;
}
let counter;
const button =  document.querySelector('#btn-timer');
button.addEventListener("click", function handlePress(){
    if (isPlaying) {
        pause();
        clearInterval(counter);
        button.className = "play-pause-btn btn";
    } 
    else {
        play();
        counter = setInterval(timer, 1000);
        button.className = "pause-btn btn";
    }
})