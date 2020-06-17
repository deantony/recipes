//read url and disable corresponding nav link
nav_home = document.getElementById("nav-home");
window.onload = function(){
   let user_url = window.location.href;

    if(user_url == "https://deantony.github.io/recipes/index.html" || user_url == "https://deantony.github.io/recipes/"){
        nav_home.style.boxShadow = "inset 0 6px 8px 0 rgba(0, 0, 0, .2)";
        nav_home.onclick = function(){
            return false; 
        }
        nav_home.onmouseenter = function(){
            nav_home.style.cursor = "not-allowed";
            nav_home.style.padding = "6px 8px"
        }
    }
}
//Disable right click on cards
let cards = document.getElementsByClassName("card");
for(var i = 0; i < cards.length; i++){
    var card = cards[i];
    card.oncontextmenu = function(){
        return false;
    }
}
