var milisec = 0,
    sec = 0,
    min = 0,
    timer = document.getElementById('timer'),
    stop = document.querySelector('.button-cancel'),
    circle = document.querySelector('.button-circle'),
    list = document.querySelector('.time-list'),
    deleteList = document.querySelector('.delete-list'),
    start = document.querySelector('.button-start');

    timer.innerHTML = '00' + ':00' + ':00';

// function init() {
//   setInterval(timer, 10);
// }

function startimer() {
    milisec++;
    if(milisec>= 100){
      sec++;
      milisec = milisec - 100;
    }
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
      if (milisec < 10) {
          if (sec < 10) {
              if (min < 10) {
                timer.innerHTML ='0' + min + ':0' + sec + ':0' + milisec;
              } else {
                timer.innerHTML = min + ':0' + sec + ':0' + milisec;
              }
          } else {
              if (min < 10) {
                timer.innerHTML = '0' + min + ':' + sec + ':0' + milisec;
              } else {
                timer.innerHTML = min + ':' + sec + ':0' + milisec;
              }
          }
      } else {
          if (sec < 10) {
              if (min < 10) {
                timer.innerHTML = '0' + min + ':0' + sec + ':' + milisec;
              } else {
                timer.innerHTML = min + ':0' + sec + ':' + milisec;
              }
          } else {
              if (min < 10) {
                timer.innerHTML = '0' + min + ':' + sec + ':' + milisec;
              } else {
                timer.innerHTML = min + ':' + sec + ':' + milisec;
              }
          }
      }
    }

    var go;
    var i = 1;
    deleteList.addEventListener('click', function(){
      i = 1;
      list.innerHTML = '';
    });

    start.addEventListener('click', function() {
      if (start.textContent === 'Start' || start.textContent === 'Continue'){
        clearInterval(go);
        go = setInterval(startimer, 10);
        start.innerHTML = 'Pause';
        start.classList.add('button-stop');
      } else{
        clearInterval(go);
        start.innerHTML = 'Continue';
        start.classList.remove('button-stop');
      }
    });

// Кнопка СТОП
stop.addEventListener('click', function(){
  clearInterval(go);
  timer.innerHTML = '00' + ':00' + ':00';
  milisec = 0;
  sec = 0;
  min = 0;
  start.innerHTML = 'Start';
});

//  кнопка Круга
circle.addEventListener('click', function(){
  if(start.textContent === 'Start' || start.textContent === 'Continue'){
    start.innerHTML = 'Pause';
  };
  var newLi = document.createElement('li');
  newLi.classList.add('new-li');
  newLi.innerHTML = '<p>' + 'Circle ' + i + ': ' + '</p>' + '<span>' + timer.textContent + '</span>';
  list.append(newLi);
  setTimeout(function() {
    newLi.classList.add('show');
  }, 10);
  i++;
  clearInterval(go);
    timer.innerHTML = '00' + ':00' + ':00';
    milisec = 0;
    sec = 0;
    min = 0;
    go = setInterval(startimer, 10);
});

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