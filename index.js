var playerOneScore = 0;
var playerTwoScore = 0;


function clickMe(){

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImage1 = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = playerOne+" wins!";
    playerOneScore++;
  }
  else if(randomNumber2===randomNumber1){
    document.querySelector("h1").innerHTML = "Draw!";
  }
  else{
    document.querySelector("h1").innerHTML = playerTwo+" wins!";
    playerTwoScore++;
  }
  document.querySelector(".p1").innerHTML = playerOne+": "+playerOneScore;

  document.querySelector(".p2").innerHTML = playerTwo+": "+playerTwoScore;

}



document.querySelector("button").addEventListener("click",clickMe);

  var playerOne = prompt("Player 1:");
  var playerTwo = prompt("Player 2:");

  document.querySelector(".p1").innerHTML = playerOne;
  document.querySelector(".p2").innerHTML = playerTwo;
