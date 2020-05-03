// Set the date we're counting down to
var countDownDate = new Date("May 2, 2020 23:40:00").getTime();


// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();


  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "Expires in: " + hours + " hours "
    + minutes + " minutes " + seconds + " seconds ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIMER EXPIRED";

    document.body.style.backgroundColor = "#91231c";
    document.body.style.color = "white";

  }
}, 1000);

// create random code
var key1 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
var key2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
console.log(key1);
document.getElementById("code1").innerHTML = key1;
document.getElementById("code2").innerHTML = key2;
