//Disable right click on cards
let cards = document.getElementsByClassName("card");
for(var i = 0; i < cards.length; i++){
    var card = cards[i];
    card.oncontextmenu = function(){
        return false;
    }
}
//read url and disable corresponding nav link
nav_home = document.getElementById("nav-home");
window.onload = function(){
   let user_url = window.location.href;
   alert(`Your URL is ${user_url}`)
    if(user_url == "https://deantony.github.io/recipes/index.html" || user_url == "https://deantony.github.io/recipes/"){
        nav_home.onmouseenter = function(){
            nav_home.cursor = "not-allowed"
            console.log("True")
        }
    }
}