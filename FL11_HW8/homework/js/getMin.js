function getMIn() {
  let min = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}
getMIn(3,0,-3);