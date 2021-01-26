








const questions = [
    { question: "what does #FFB6C1 mean?", answers: ["a.) Fluffy Feathery boots", "b.) Hashtag Feeling Funny Boo", "c.) lightpink in CSS", "d.) FFB6 what?"], correctAnswer: lightpink in CSS },
},
correctAnswer: "c.) lightpink in CSS" 
];

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 20;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  mainEl.appendChild(imgEl);

}

setTime();
