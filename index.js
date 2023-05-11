
let randomNumber1= Math.floor(Math.random()*6 +1);
let randomDiceImg = "images/" + "dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImg);

var randomNumber2 = Math.floor(Math.random()*6+1);
let randomDiceImg2 = "images/" + "dice" + randomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImg2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 win";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 win";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}