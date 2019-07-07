const min = 0;
const returnMax = 9;
const roundMaxPlus = 4;
const returnI = 4;
const returnPrize = 100;
const prizeDivider = 2;
let max = 9;
let roundPrize = 100;
let prize = 100;
let totalPrize = 0;
let randomNumber = Math.floor(Math.random() * (max - min) + min);
if(confirm('Do you want to play a game?')){
  for (let i = 3; i > 0; i--){
    let userNumber = +prompt(`Choose a roulette pocket number from ${min} to ${max-1}
    \nAttempts left: ${i}
    \nTotal prize: ${totalPrize}$
    \nPossible prize on current attempt: ${prize}$`);
    if(randomNumber === userNumber){
      totalPrize += prize;
      if(confirm(`Congratulation, you won!   Your prize is: ${totalPrize} $. Do you want to continue?`)){
        max += roundMaxPlus;
        randomNumber = Math.floor(Math.random() * (max - min) + min);
        roundPrize *= prizeDivider;
        prize = roundPrize;
        i = returnI;
      }else{
        alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
        if(confirm('Do you want to play again?')){
          max = returnMax;
          randomNumber = Math.floor(Math.random() * (max - min) + min);
          i = returnI;
          prize = returnPrize;
          roundPrize = returnPrize;
          totalPrize = 0;
        }else{
          break;
        }
      }
    }else{
      if(i !== 1){
        prize /= prizeDivider;
      }else{
        totalPrize = 0;
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        if(confirm('Do you want to play again?')){
          max = returnMax;
          randomNumber = Math.floor(Math.random() * (max - min) + min);
          i = returnI;
          prize = returnPrize;
          roundPrize = returnPrize;
        }
      }
    }
  }
}else{
  alert('You did not become a billionaire, but can');
}