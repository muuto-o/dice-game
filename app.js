// toglogchiin eeljiig hadgalah negduger toglogch 0 hoyrdugaar toglogch 1
var activePlayer = 1;

// toglogchiin tsugluulsan onoog hadgalah
var scores = [0, 0];

// toglogchiin elljindee tugluulj bui onoo
var roundScore = 0;

// shoonii talli todorhoiloh 1-6 hoorond random too bain

var dice = Math.floor(Math.random() * 6) + 1;


document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;


document.querySelector(".dice").style.display = "none";
