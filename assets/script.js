var correctAnswer = document.querySelectorAll("#correct");
const questionscontainer = document.getElementById("questions");
const firstQuestionTitle = document.querySelector("#questions");
const firstQuestionChoices = document.querySelector("#choices");
const secondQuestionTitle = document.querySelector("#questionstwo");
const secondQuestionChoices = document.querySelector("#choices2");
const thirdQuestionTitle = document.querySelector("#questionsthree");
const fourthQuestionTitle = document.querySelector("#questionsfour");
const fifthQuestionTitle = document.querySelector("#questionsfive");
const endResult = document.querySelector("#end-screen");
var timer = document.getElementById("time");
var timeLeft = 75;
var highscores = document.getElementById("highscores");
var score = 0;

document.querySelector(".start").addEventListener("click", function () {
  document.querySelector("#start-screen").classList.add("hide");
  displayQuestion();
});

document.querySelector("#start").addEventListener("click", function () {
  questions.classList.remove("hide");
});

firstQuestionTitle.addEventListener("click", function () {
  firstQuestionTitle.classList.add("hide");
  secondQuestionTitle.classList.remove("hide");
});

secondQuestionTitle.addEventListener("click", function () {
  secondQuestionTitle.classList.add("hide");
  thirdQuestionTitle.classList.remove("hide");
});
thirdQuestionTitle.addEventListener("click", function () {
  thirdQuestionTitle.classList.add("hide");
  fourthQuestionTitle.classList.remove("hide");
});
fourthQuestionTitle.addEventListener("click", function () {
  fourthQuestionTitle.classList.add("hide");
  fifthQuestionTitle.classList.remove("hide");
});
fifthQuestionTitle.addEventListener("click", function () {
  fifthQuestionTitle.classList.add("hide");
  endResult.classList.remove("hide");
});

function endQuiz () {
    document.querySelector ("#questionfive").classList.add("hide")
    document.querySelector("#end-screen").classList.remove("hide")
    
}


function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;

    if (timeLeft <=0) {
    //   ADD FUNCTION TO END QUIZ
    }
  }, 1000);
}
document.querySelector("#start").addEventListener("click", startTimer);


function checkAnswer(e) {
console.log (e.target)
var id = e.target.getAttribute ("id") 
console.log (id)

  if (id) {
    score += 10;
console.log(score)
  } else {
    timeLeft -= 10;
  }
}
// document.querySelector("highscores").addEventListener("click",checkAnswer);

document.querySelector("#questions").addEventListener("click",checkAnswer)
document.querySelector("#questionstwo").addEventListener("click",checkAnswer)
document.querySelector("#questionsthree").addEventListener("click",checkAnswer)
document.querySelector("#questionsfour").addEventListener("click",checkAnswer)
document.querySelector("#questionsfive").addEventListener("click",function()
{
    checkAnswer()
    endQuiz()
})

const savedFinalScore = localStorage.getItem('finalScore');
localStorage.setItem("score", score);
var finalScore = score;
document.querySelector("#final-score").textContent = finalScore;
