let date1 = new Date('01/04/2023');
// To-Do: Change this date to '01/05/2023'
let today = new Date();

// console.log("Today is", today);
// console.log("The date we stopped writing each other...", date1);

// Calculate time difference
var difftime = today.getTime() - date1.getTime();

// Calculate no. of days
var difference = difftime / (1000 * 3600 * 24);
let differenceA = Math.trunc( difference )

// console.log("Results for Manifiesto Delirista will be...", differenceA);
document.getElementById("difference").innerHTML = differenceA;
document.getElementById("differenceA").innerHTML = differenceA;
