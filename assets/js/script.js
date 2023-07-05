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
var isCorrect = false;

var listofInitials =  [];
if(localStorage.getItem('initials')){
    listofInitials = JSON.parse(localStorage.getItem('initials'));
}

var listofScores = [];
if(localStorage.getItem('score')){
    listofScores = JSON.parse(localStorage.getItem('score'));
}
console.log(listofInitials);
console.log(listofScores);

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
var form = document.querySelector("#submitForm");
var initials = document.querySelector("#initialsIn");
var scoreEl = document.querySelector("#scoreDisplay");
var correctMesg = document.querySelector("#correctness");

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
        correctMesg.style.display = "flex";
        correctMesg.textContent = "Correct!";
    }else{
        console.log("wrong");
        correctMesg.style.display = "flex";
        correctMesg.textContent = "Wrong!";
        timeLeft -= 30;
        
    }
    
    setTimeout(function(){
        correctMesg.style.display = "none";
    }, 700)
    // increment the current question by 1
    currentQuestion++;

    
    // Determine if the user has reached the end of the question
    if(currentQuestion == questions.length){
        // if they did, stop the time, end the game.
        clearInterval(timeInterval);
        timeEl.textContent = "Time Left: " + timeLeft;
        correctMesg.style.top = "50vh"
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
    
    // Prompts the user for initials
    form.style.display = "flex";
    
    
    // display the score
   scoreEl.textContent = "Your Score: " + timeLeft;

    // replace the question
    questionEl.textContent = "Let's see...";


    // hide the options
    for(var i = 0; i < optionBtns.length; i++){
        optionBtns[i].style.display = "none";
    }

    

    form.addEventListener("submit",saveInitials);
    
}


function saveInitials(event){
    // triggered when the user submitted their initials
    event.preventDefault();
    userInitials = initials.value;
    // save the scores and their initials to the local storage
    listofInitials.push(userInitials);
    listofScores.push(timeLeft);
    console.log(listofScores);
    console.log(listofInitials);
    localStorage.setItem('initials', JSON.stringify(listofInitials));
    localStorage.setItem('score', JSON.stringify(listofScores));
        
    // take the user to the highScore.html page
    window.location.href = './assets/html/highScore.html';
}

// event listener to triger start function
startBtn.addEventListener("click", start);
