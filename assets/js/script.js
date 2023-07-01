// Global variables
var scores = 0; 
var timeLeft = 200;
var questions = ["What is the capital Uruguay?", "What is the capital of Panama?"];
var answerChoices = [
    ["Managua", "Santiago", "Monte Video", "Brasilia"], 
    [""]
]; // made of arrays of strings
var correctAnswer = ["Monte Video","Panama City"]; // made of strings
var currentQuestion = 0;

// All of our selectors
var questionEl = document.querySelector("#question");
var startBtn = document.querySelector("#start");
var optionBtn1 = document.querySelector("#option1");
var optionBtn2 = document.querySelector("#option2");
var optionBtn3 = document.querySelector("#option3");
var optionBtn4 = document.querySelector("#option4");
var optionBtns = [optionBtn1, optionBtn2, optionBtn3, optionBtn4];
var timeEl = document.querySelector("#time");
timeEl.textContent = "Time Left: " + timeLeft;

// functions
function countTime(){
    var timeInterval = setInterval(function(){
        if(timeLeft == 0){
            clearInterval(timeInterval);
            alert("Time has run out!!");
            endGame();
        }else if(timeLeft <= 30){
            timeLeft--;
            timeEl.style.color = "red";
        }else{
            timeLeft--;
        }
        
        timeEl.textContent = "Time Left: " + timeLeft;
    }, 1000);
}

function start() {
    // triggered when they pressed button (event listener)
    // starts the timer
    countTime();
        // set interval
        // once the timer hits 0, call endGame function
        
    // hide the start button
    startBtn.setAttribute("style", "display: none;");

    // reveal the options, questions
    questionEl.textContent = questions[currentQuestion];
    for(var i = 0; i < optionBtns.length; i++){
        optionBtns[i].style.display = "block";
        optionBtns[i].textContent = answerChoices[currentQuestion][i];
        optionBtns[i].addEventListener("click", nextQuestion);
    }


}

function nextQuestion(event){
    // triggered when the user selects any answer
    // figure out what answer the user chose
    // figure out if the answer is right or wrong
        // if it's wrong, reduce the time, then show message "Wrong!"
        // if it's right, then show message "Correct!" (time left at the end is the user's score)
    // increment the current question by 1
    // Change the question
    // Change the choices
    // 
    
}

function endGame() {
    // triggered either when timeLeft becomes 0 or when the user finishes all questions
    // Prompts the user for initials
    // display the score
    // hide the question
    // If the user finishes before timeer runs out, stop the timer from running 
}


function saveInitials(){
    // triggered when the user submitted their initials
    // save the scores and their initials to the local storage
        // read (save them to another var) the exising score
        // add the new scores to the end of the array
        // now overwrite the scores with the new array
    // take the user to the highScore.html page
}

// event listener to triger start function
startBtn.addEventListener("click", start);
