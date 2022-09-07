let count = 1;

function fun(){



var randomNumber = Math.floor(Math.random()*6)+1;
var randomImageName =  "dice" + randomNumber + ".png";
var num1 = document.querySelectorAll("img")[0];
num1.setAttribute("src", randomImageName);




var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageName2 =  "dice" + randomNumber2 + ".png";
var num2 = document.querySelectorAll("img")[1];
num2.setAttribute("src", randomImageName2);

var result = document.getElementById("result");

result.innerHTML = count++;

var heading = document.querySelector("h1");

heading.style.fontSize =  "3rem";
heading.style.marginTop = "2rem";
if(randomNumber > randomNumber2 ) {

    heading.innerHTML = "Player A Win The Match!";
}

else if(randomNumber === randomNumber2 ) {

    heading.innerHTML = " Match Tie! ";
    result.innerHTML = 0;
}



else    {

    heading.innerHTML = "Player B Win The Match!";

}




}