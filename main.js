
let cards = document.getElementsByClassName("card");
for(var i = 0; i < cards.length; i++){
    var card = cards[i];
    card.oncontextmenu = function(){
        return false;
    }
}