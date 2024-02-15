const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //it is used to execute a function after every interval of time which is given as argument in ms
