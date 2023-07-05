// retrieves data from local storage
var initials = JSON.parse(localStorage.getItem('initials'));
var scores = JSON.parse(localStorage.getItem('score'));

// selectors
var ranking = document.querySelector("#ranks");


for(var i = 0; i < initials.length; i++){
    let lists = document.createElement("li");
    lists.textContent = initials[i] + ": " + scores[i];
    ranking.appendChild(lists);
}
var allLists = ranking.querySelectorAll("li");



