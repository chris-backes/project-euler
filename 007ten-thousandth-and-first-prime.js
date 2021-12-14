function primeFinder(primeTarget) {
  //because the loop is set up to efficeietnlycheck large number, it cannot check small numbers very well
  let primeArray = [2, 3, 5];
  let i = 7;

  while (primeArray.length < primeTarget) {
    let primeLogger = 0;
    for (j = 3; j <= Math.floor(Math.sqrt(i)); j += 2) {
      if (i % j === 0) {
        primeLogger = primeLogger + 1;
      }
    }
    if (primeLogger === 0) {
      primeArray.push(i);
    }
    i = i + 2;
  }
  return primeArray[primeArray.length - 1];
}
console.log(primeFinder(10001));
