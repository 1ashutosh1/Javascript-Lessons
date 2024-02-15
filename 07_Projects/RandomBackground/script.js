const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');
let intervalId;

function changeColor(){
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

start.addEventListener('click',function(){
  if(!intervalId){
   intervalId = setInterval(changeColor,1000);
  }
})

stop.addEventListener('click',function(){
  clearInterval(intervalId);
  intervalId = null;
})

