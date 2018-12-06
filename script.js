// TIMER
let hourInput = document.getElementById('hour')
let minInput = document.getElementById('min')

const button = document.querySelector('.btn')

function nextPage(){
  localStorage.setItem('timer', JSON.stringify({hora: hourInput.value, minutos: minInput.value}));
  
  location.href = 'page2.html';
}

button.addEventListener('click', function(e){
  e.preventDefault();
   nextPage();
})
