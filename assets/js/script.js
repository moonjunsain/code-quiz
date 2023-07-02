// Global variables
var timeLeft = 200;
var questions = [
    "What is the airspeed velocity of an unladen swallow?", 
    "NEE NEE NEE NEE NEE NEE",
    "What is your favorite color?",
    "You have encountered a rabbit in front of a cave, what would you do?"
];
var answerChoices = [
    ["30 km/s", "How am I supposed to know that", "An African or an European swallow?", "Cats"], 
    ["What?", "Can you shut up", "NEE", "Gives shrubbery"],
    ["Blue", "The answer is not here", "Blue! oh wait yellowwww", "Why are you even asking?"],
    ["Go and give it a carrot and name it Charly", "RUN AWAY! RUN AWAY!", "Why am I infront of a cave?", "Okay these questions don't make sense"]
];
var correctAnswer = [
    "An African or an European swallow?",
    "Gives shrubbery",
    "Blue",
    "RUN AWAY! RUN AWAY!"

]; 
var currentQuestion = 0;
var timeInterval;
var userInitials = "EMPTY";


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
    timeInterval = setInterval(function(){
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
    if(event.target.textContent == correctAnswer[currentQuestion]){
        console.log("correct!");
    }else{
        console.log("wrong");
        timeLeft -= 30;
    }

    // increment the current question by 1
    currentQuestion++;
    // Determine if the user has reached the end of the question
    if(currentQuestion == questions.length){
        clearInterval(timeInterval);
        endGame();
        return;
    } 

    // Change the question
    // Change the choices
    questionEl.textContent = questions[currentQuestion];
    for(var i = 0; i < optionBtns.length; i++){
        optionBtns[i].textContent = answerChoices[currentQuestion][i];
    }
    
}

function endGame() {
    // triggered either when timeLeft becomes 0 or when the user finishes all questions
    alert("The game has ended");
    // Prompts the user for initials
    // display the score
    // hide the question
    

    saveInitials();
    
}


function saveInitials(){
    // triggered when the user submitted their initials
    // save the scores and their initials to the local storage
    localStorage.setItem('initials', userInitials);
    localStorage.setItem('score', timeLeft);
        
    // take the user to the highScore.html page
    window.location.href = './assets/html/highScore.html';
}

// event listener to triger start function
startBtn.addEventListener("click", start);
