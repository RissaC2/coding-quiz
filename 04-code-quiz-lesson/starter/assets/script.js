var startbutton = document.querySelector(".start");
var questions = document.querySelector(".hide");



document.querySelector("#start").addEventListener("click", function () {
    questions.classList.remove("hide");
  });
  


//list questioms for quiz
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


var timel = document.querySelector(".timer")

var secondsleft = 50


function setTime() {
 
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
   
        clearInterval(timerInterval);
      
        sendMessage();
      }
  
    }, 1000000);
  }