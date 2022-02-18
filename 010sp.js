function sumOfPrimes(upperBound) {
  var factors = [];
  var sumPrimes = 0;
  let j = 2;
  let primeLogger = 0;
  function prime() {
    while (j < upperBound) {
      //the less than or equals sign below solves the edge case of four getting passed through since if this were just less than, 4 would get pushed.
      for (let m = 2; m <= Math.sqrt(j); m++) {
        if (j % m === 0) {
          primeLogger = primeLogger + 1;
        }
      }
      if (primeLogger === 0) {
        factors.push(j);
      }
      primeLogger = 0;
      j++;
    }
  }
  function summation() {
    for (let i = 0; i < factors.length; i++) {
      sumPrimes = sumPrimes + factors[i];
    }
  }
  prime();
  summation();
  return sumPrimes;
}

console.log(sumOfPrimes(2000000));
