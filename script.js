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
  playerOneScore += 1;
  playerOneCount.textContent = playerOneScore;
};

function countUp2() {
  if (playerTwoScore === 100) {
    return
  }
  playerTwoScore += 1;
  playerTwoCount.textContent = playerTwoScore;
};

document.addEventListener("keydown", function
(event){
    if(event.key === "k" || event.key === "l" || event.key ==="K" || event.key ==="L") 
        countUp2();
})

function deleteScore() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneCount.textContent = playerOneScore;
  playerTwoCount.textContent = playerTwoScore;
}

