// retrieves data from local storage
var initials = JSON.parse(localStorage.getItem('initials'));
var scores = JSON.parse(localStorage.getItem('score'));

// selectors
var ranking = document.querySelector("#ranks");

var combinedData = [{userInitial: "June - try harder", userScore: 99999}];

// combine data into object array
for(var i = 0; i < initials.length; i++){
    combinedData.push({userInitial: initials[i], userScore: scores[i]});
}

// sorting it from the highest score to lowest
combinedData.sort(function(a, b){
    return b.userScore - a.userScore;
});

// Putting the list items all to ranking
for(var i = 0; i < combinedData.length; i++){
    let lists = document.createElement("li");
    lists.textContent = combinedData[i].userInitial + ": " + combinedData[i].userScore;
    ranking.appendChild(lists);
}

var allLists = ranking.querySelectorAll("li");



