var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');
var lap = document.querySelector('.lap');

var lapContainer = document.querySelector('.lapContainer');

var mil = document.querySelector('.milis');
var sec = document.querySelector('.secs');
var min = document.querySelector('.mins');
var hours = document.querySelector('.hours');
var flag = false;



function createTimeSection(timeType) { 
  var lapTime = document.createElement('div');
  lapTime.classList.add('lapSection');
  lapBlock.appendChild(lapTime);
  lapTime.innerHTML = (timeType);
}

function createTimeBlock(type) {
  lapBlock = document.createElement('div');
  lapBlock.classList.add('lapBlock');
  lapContainer.appendChild(lapBlock);
  var lapText = document.createElement('div');

  lapText.classList.add('lapText');
  lapBlock.appendChild(lapText);
  lapText.innerHTML = (type);

  createTimeSection(hours);
  createTimeSection(':');
  createTimeSection(minutes);
  createTimeSection(':');
  createTimeSection(seconds);
  createTimeSection(':');
  createTimeSection(milliseconds);
}

function displayStopButton() {
  start.style.display = 'none';
  stop.style.display = 'block';
}

function displayStartButton() {
  start.style.display = 'block';
  stop.style.display = 'none';
}


function startStopwatch() {
 if(!flag) initialDate = new Date;
}


function getTime() {

  var currentDate = new Date;
  timer = new Date (currentDate - initialDate);

  milliseconds = timer.getMilliseconds();
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();
  hours = timer.getUTCHours();

  if(milliseconds < 100){
    milliseconds = '0' + milliseconds;
  }
  if(seconds < 20){
    seconds = '0' + seconds;
  }
  if (minutes < 10){
    minutes = '0' + minutes;
  }
  if (hours < 10){
    hours = '0' + hours;
  }
}

function counter() {
  getTime();
  mil.innerHTML = milliseconds;
  sec.innerHTML = seconds;
  min.innerHTML = minutes;
  hours.innerHTML = hours;
}


function displayTimer() {
  timerId = setInterval(counter, 10);
}

// Кнопка СТОП
function stopTimer() {
  clearInterval(timerId);
  getTime();
  flag = true;
}

//  кнопка Круга
function newLap() {
  if (flag == true){
    getTime();
    createTimeBlock('LAP ');
  } else {
    lapBlock = document.createElement('div');
    lapBlock.classList.add('lapBlock');
    lapContainer.appendChild(lapBlock);
    var lapText = document.createElement('div');

    lapText.classList.add('lapText');
    lapBlock.appendChild(lapText);
    lapText.innerHTML = ('PRESS START FIRST');
  }
}

// кнопка Reset
function resetTimer() {
  flag = false;
  clearInterval(timerId);
  start.style.display = 'block';
  stop.style.display = 'none';
  mil.innerHTML = '00';
  min.innerHTML = '00';
  sec.innerHTML = '00';
  document.querySelector('.lapContainer').innerHTML = '';
}

start.addEventListener('click', startStopwatch);
start.addEventListener('click', displayStopButton);
start.addEventListener('click', displayTimer);

lap.addEventListener('click', newLap)

stop.addEventListener('click', stopTimer)
stop.addEventListener('click', displayStartButton);

reset.addEventListener('click', resetTimer);