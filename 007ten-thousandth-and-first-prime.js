function primeFinder(primeTarget) {
  let primeArray = [2];
  let i = 3;
  while (primeArray.length < primeTarget) {
    let primeLogger = false;
    for (j = 1; j < primeArray.length && primeArray[j] <= Math.sqrt(i); j++) {
      if (i % primeArray[j] === 0) {
        primeLogger = true;
        break;
      }
    }
    if (primeLogger === false) {
      primeArray.push(i);
    }
    i += 2;
  }
  return primeArray[primeArray.length - 1];
}
console.log(primeFinder(10001));

//Does not assume 2 to be prime. Cannot iterate by 2
function primeFinder2(primeTarget) {
  let primeArray = [];
  let i = 2;
  while (primeArray.length < primeTarget) {
    let primeLogger = false;
    for (j = 0; j < primeArray.length && primeArray[j] <= Math.sqrt(i); j++) {
      if (i % primeArray[j] === 0) {
        primeLogger = true;
        break;
      }
    }
    if (primeLogger === false) {
      primeArray.push(i);
    }
    i++;
  }
  return primeArray[primeArray.length - 1];
}
console.log(primeFinder2(10001));

//uses the fact that all primes excluding 2 and 3 fit the equation 6k +/- 1.
function primeFinder3(primeTarget) {
  let primeArray = [2, 3];
  let i = 1;
  while (primeArray.length < primeTarget) {
    let primeLogger = false;
    let minusI = 6 * i - 1;
    let plusI = 6 * i + 1;
    for (
      let j = 0;
      primeArray.length && primeArray[j] <= Math.sqrt(minusI);
      j++
    ) {
      if (minusI % primeArray[j] === 0) {
        primeLogger = true;
        break;
      }
    }
    if (primeLogger === false) {
      primeArray.push(minusI);
    }
    primeLogger = false;
    for (
      let j = 0;
      primeArray.length && primeArray[j] <= Math.sqrt(plusI);
      j++
    ) {
      if (plusI % primeArray[j] === 0) {
        primeLogger = true;
        break;
      }
    }
    if (primeLogger === false) {
      primeArray.push(plusI);
    }
    i++;
  }
  return primeArray[primeArray.length - 1];
}
console.log(primeFinder3(10001));
