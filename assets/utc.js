function updateTime() {
  var now = new Date();
  var hours = now.getUTCHours();
  var minutes = now.getUTCMinutes();
  var seconds = now.getUTCSeconds();

  // Format the hours, minutes, and seconds as a string in 24-hour format
  var time = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById('clock').innerHTML = time;
}

setInterval(updateTime, 1000);
