var primeArray = [2, 3, 5];
var i = 7;
//Not strictly needed for this exercise, but added in so that code finds nth prime, where this variable is n (excluding where n is less than or equal to 3, and so those are included above)
var primeTarget = 10001;
var primeLogger = 0;

while (primeArray.length < primeTarget) {
  for (j = 2; j <= i / 3; j++) {
    if (i % j === 0) {
      primeLogger = primeLogger + 1;
    }
  }
  if (primeLogger === 0) {
    primeArray.push(i);
  }
  primeLogger = 0;
  i = i + 2;
}

console.log(primeArray[primeArray.length - 1]);
