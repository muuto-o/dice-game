// toglogchiin eeljiig hadgalah negduger toglogch 0 hoyrdugaar toglogch 1
var activePlayer = 0;

// toglogchiin tsugluulsan onoog hadgalah
var scores = [0, 0];

// toglogchiin elljindee tugluulj bui onoo
var roundScore = 0;

// shoonii talli todorhoiloh 1-6 hoorond random too bain


var diceDom = document.querySelector(".dice");

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;


diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function(){ 
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";

    if(diceNumber !== 1){
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }else {
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;


        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        diceDom.style.display = "none";
    }

    // document.querySelector(".btn-hold").addEventListener("click", function(){
    //     scores[activePlayer] = roundScore;
    //     document.getElementById("score-" + activePlayer).textContent = roundScore;
    //     roundScore = 0;
    //     document.querySelector(".player-0-panel").classList.toggle("active");
    //     document.querySelector(".player-1-panel").classList.toggle("active");
    // });
});




