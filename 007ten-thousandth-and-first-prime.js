function primeFinder(primeTarget) {
  //since 2 is the only even prime, putting it here saves us some effort in checking primality by just iterating over the odd numbers
  //it also helps the for loop since we are only interested in checking for divisors among previous primes.
  let primeArray = [2];
  let i = 3;

  while (primeArray.length < primeTarget) {
    let primeLogger = false;
    for (j = 0; j < primeArray.length || primeArray[j] <= Math.sqrt(i); j++) {
      if (i % primeArray[j] === 0) {
        primeLogger = true;
        //Since we have found a divisor and changed primeLogger, we can exit the loop
        break;
      }
    }
    //Where the break goes to, and also where the for loop goes to once finishes
    if (primeLogger === false) {
      primeArray.push(i);
    }
    i += 2;
  }
  return primeArray[primeArray.length - 1];
}
console.log(primeFinder(10001));
