function primeFactor(num) {
  let primeArray = [];
  //if we watned to cut this down, set i to three and iterate by two instead of one.
  for (i = 1; i < num / 2; i++) {
    if (num % i === 0) {
      primeArray.push(i);
    }
  }
  return primeArray[primeArray.length - 1];
}
console.log(primeFactor(600851475143));
