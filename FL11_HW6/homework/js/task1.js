const a1 = parseInt(prompt('Enter the first coordinate A'));
const a2 = parseInt(prompt('Enter the second coordinate A'));
const b1 = parseInt(prompt('Enter the first coordinate B'));
const b2 = parseInt(prompt('Enter the second coordinate B'));
const c1 = parseInt(prompt('Enter the first coordinate C'));
const c2 = parseInt(prompt('Enter the second coordinate C'));
const divisor = 2;
if((a1 + b1)/divisor === c1){
  console.log((a2 + b2)/divisor === c2);
}else{
  console.log(false);
}