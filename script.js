//Want a timer that counts down from 3.
//Add a solo and competitive mode
//navigation 

const playerOneCount = document.getElementById("count-one");
const playerTwoCount = document.getElementById("count-two");

var playerOneScore = 0;
var playerTwoScore= 0;


document.addEventListener("keydown", function
(event){
    if(event.key === "a" || event.key === "s" || event.key ==="A" || event.key ==="S") 
        countUp1();
})

function countUp1() {
  if (playerOneScore === 100) {
    return
  }
  
  if (playerTwoScore === 100) {
    return
  }
  
  playerOneScore += 1;
  playerOneCount.textContent = playerOneScore;
  
  if (playerOneScore === 100) {
    displayWinnerOne();
  }
};

function countUp2() {
  if (playerTwoScore === 100) {
    return
  }
  
  if (playerOneScore === 100) {
    return
  }
  
  playerTwoScore += 1;
  playerTwoCount.textContent = playerTwoScore;
  
  if (playerTwoScore === 100) {
    displayWinnerTwo();
  }
};

document.addEventListener("keydown", function
(event){
    if(event.key === "k" || event.key === "l" || event.key ==="K" || event.key ==="L") 
        countUp2();
})

//RESET BUTTON

function deleteScore() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneCount.textContent = playerOneScore;
  playerTwoCount.textContent = playerTwoScore;
  var winnerTwoText = document.getElementById("winner2");
  var winnerOneText = document.getElementById("winner1");
  winnerTwoText.style.display = "none"; //deletes winner upon reset
  winnerOneText.style.display = "none"; //deletes winner upon reset
}

//WINNER ANNOUNCEMENT

function displayWinnerOne() {
  var winnerOneText = document.getElementById("winner1");
  winnerOneText.style.display = "block";
}

function displayWinnerTwo() {
  var winnerTwoText = document.getElementById("winner2");
  winnerTwoText.style.display = "block";
}

//TIMER

let timeRemaining = 3
let timerElement =document.getElementById("Countdown")

function countdown() {
  timeRemaining = timeRemaining -1;
  if(timeRemaining <= 0) {
  timerElement.innerText = "GO GO GO!" 
  }
  else {
    timerElement.innerText = timeRemaining
  console.log(timeRemaining)
}
}

function Countdown () {
  console.log(20)
}

setInterval(countdown, 1000)
