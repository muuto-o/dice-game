// toglogchiin eeljiig hadgalah negduger toglogch 0 hoyrdugaar toglogch 1
var activePlayer = 1;

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
    console.log("Shoo shidlee" + diceNumber);
});
