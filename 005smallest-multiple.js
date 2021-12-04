//The least common multiple of any consecutive set of numbers beginning at 1 (or 2) is the product of the primes in that set, where each prime n is raised to the power p such that n^p is still less than the uppoer boundary of the set.
//This checks if a number is prime, then raises it to the highest power, and takes that set and multiplies them together

function leastCommonMultiple(upperBound) {
  function prime(i) {
    for (j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        return false;
      }
    }
  }
  function highestExponent() {}
  for (i = 2; i <= upperBound; i++) {
    if (prime(i)) {
    }
  }
}
