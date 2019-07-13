function reverseNumber(number,reverse=0) {
  reverse = reverse * 10 + number % 10;
  if (Math.abs(number) < 10){
    return reverse;
  }
  return reverseNumber(parseInt(number / 10), reverse);
}
reverseNumber(-321);
