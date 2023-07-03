// retrieves data from local storage
var initials = localStorage.getItem('initials');
var scores = localStorage.getItem('score');

// selectors
var ranking = document.querySelector("#ranks");
var lists = document.createElement("li");
lists.textContent = initials + ": " + scores;
ranking.appendChild(lists);

