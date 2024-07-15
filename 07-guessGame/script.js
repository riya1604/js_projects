let headsElement = document.querySelector(".js-heads")
console.log(headsElement);

let tailsElement = document.querySelector(".js-tails")
console.log(tailsElement);

let yourGuess = document.querySelector(".js-your-guess");

let computerTextValue = document.querySelector(".js-computer-value");

let result = document.querySelector(".js-result");



let userMove;

headsElement.addEventListener("click", function(e){
    yourGuess.innerText = `Your Guess: Heads`;
    userMove="Heads";
    let computerMove = computerGuess();
    gameResult(userMove, computerMove);
})

tailsElement.addEventListener("click", function(e){
  userMove="Tails";
  yourGuess.innerText = `Your Guess: Tails`;
  let computerMove = computerGuess();
  gameResult(userMove, computerMove);
})



function computerGuess() {

  let computerMove = Math.random();
  if(computerMove > 0.5){
     computerMove="Heads";
    computerTextValue.innerText = `Computer's Guess: Heads`
  } else if(computerMove< 0.5){
    computerMove = "Tails";
    computerTextValue.innerText = `Computer's Guess: Tails`
  }

  return computerMove;
}



function gameResult(userMove, computerMove)  {
  if(userMove === computerMove){
    result.innerText = "You Win!!"
    result.style.color = "green";
  } else {
    result.innerText = 'You Lose';
    result.style.color = 'red';
}
}


