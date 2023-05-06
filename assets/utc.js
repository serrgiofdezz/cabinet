function updateTime() {
  var now = new Date();
  var utcString = now.toUTCString();
  var time = utcString.slice(-11, -4);
  document.getElementById('clock').innerHTML = time;
}

setInterval(updateTime, 1000);
