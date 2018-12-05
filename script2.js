// TIMER
let hourInput = document.getElementById('hour')
let minInput = document.getElementById('min')

const timerCountdown = document.querySelector('.timer-countdown')


var c = localStorage.getItem('timer');
var parsedHour = JSON.parse(c);
console.log(parsedHour)

timerCountdown.innerHTML = parsedHour.hora + ":" + parsedHour.minutos;


function timer() {
  
    var count =  (parsedHour.hora * 60) + parsedHour.minutos;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    count = count - 1;
    if (count == -1) {
        clearInterval(counter);
        return;
    }

    var seconds = count % 60;
    var minutes = Math.floor(count / 60);
    var hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    timerCountdown.innerHTML = hours + ": " + minutes + ":" + seconds ; // watch for spelling
}