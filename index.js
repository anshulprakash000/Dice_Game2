var n = Math.random();
var randomNumber1 = Math.floor(n*6)+1;
var randomDice1 = "images/dice"+ randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src" , randomDice1);

var m = Math.random();
var randomNumber2 = Math.floor(m*6) +1;
var randomDice2 = "images/dice"+ randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=(" 🚩 player 1 Wins!");
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=("player 2 Wins! 🚩 ");

}
else {
    document.querySelector("h1").innerHTML=("Draw!")
}




