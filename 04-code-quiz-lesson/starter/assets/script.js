var Correctanswer = document.querySelector("#correct");
const questionscontainer = document.getElementById('questions');
const firstQuestionTitle = document.querySelector("#questions");
const firstQuestionChoices = document.querySelector("#choices");
const secondQuestionTitle = document.querySelector("#questionstwo");
const secondQuestionChoices = document.querySelector("#choices2");
const thirdQuestionTitle = document.querySelector("#questionsthree");
const fourthQuestionTitle = document.querySelector("#questionsfour");
const fifthQuestionTitle = document.querySelector("#questionsfive");
const endResult= document.querySelector("end-screen")
  
  
  document.querySelector(".start").addEventListener("click", function () {
    document.querySelector("#start-screen").classList.add("hide");
    displayQuestion();
    
  });
  
  document.querySelector("#start").addEventListener("click", function () {
    questions.classList.remove("hide");
  });


  firstQuestionTitle.addEventListener("click", function() {
    firstQuestionTitle.classList.add("hide");
    secondQuestionTitle.classList.remove("hide");
  });

  secondQuestionTitle.addEventListener("click", function() {
    secondQuestionTitle.classList.add("hide");
    thirdQuestionTitle.classList.remove("hide");
  });
  thirdQuestionTitle.addEventListener("click", function() {
    thirdQuestionTitle.classList.add("hide");
    fourthQuestionTitle.classList.remove("hide");
  });
  fourthQuestionTitle.addEventListener("click", function() {
    fourthQuestionTitle.classList.add("hide");
    fifthQuestionTitle.classList.remove("hide");
  });
  fifthQuestionTitle.addEventListener("click", function() {
    fifthQuestionTitle.classList.add("hide");
    endResult.classList.remove("hide");
  });
  
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', showResults);


//   
//list questioms for quiz
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");

// var timel = document.querySelector(".timer");

// var secondsleft = 50;

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);

//       sendMessage();
//     }
//   }, 1000000);
// }
