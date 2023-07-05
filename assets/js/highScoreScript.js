// retrieves data from local storage
var initials = JSON.parse(localStorage.getItem('initials'));
var scores = JSON.parse(localStorage.getItem('score'));

// selectors
var ranking = document.querySelector("#ranks");
var lists = document.createElement("li");

for(var i = 0; i < initials.length; i++){
    
}
lists.textContent = initials + ": " + scores;
ranking.appendChild(lists);

