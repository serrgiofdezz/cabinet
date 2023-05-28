function calculateRemainingTime() {
  var targetDate = new Date("2023-11-24T00:00:00");
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  if (timeDifference < 0) {
    document.getElementById("result").innerHTML = "This temp project has been finished. Further information in this page.";
    return;
  }

  var remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // HTML Result
  document.getElementById("result").innerHTML = "Project ends in: " +
  remainingDays + " days, " +
  remainingHours + " hours, " +
  remainingMinutes + " minutes.";
}

window.onload = calculateRemainingTime;
