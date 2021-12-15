//In contrast with the other solutions, I have commented this out because I end up explaining it to people on occasion.
function primeFinder(primeTarget) {
  //since 2 is the only even prime, putting it here saves us some effort in checking primality by just iterating over the odd numbers
  //it also helps the for loop since we are only interested in checking for divisors among previous primes.
  let primeArray = [2];
  let i = 3;
  //This can be a for loop, but I chooese it make it easy to differentiate the two
  while (primeArray.length < primeTarget) {
    //Boolean, is going to be marked true is the number is not prim
    let primeLogger = false;
    //We don't need to check for divisibility by 2, so j can equal 1. We are checking to make sure both that j does not try to grab
    //an item in the array AND the number grabbed is less than the square root. There is no number which is only divisible by numbers
    //greater than it's square root, and since we are excluding the number itself and one from this any non-prime number must have a
    //divisor appear before the square root, while a prime cannot.
    //We are also only checking for divisibility by prime numbers, since any number divisible by a composite is eo ipso divisible by
    //the factors of the composite--we do not need to check for divisibility by 9 if we have already check for divisibility by three.
    for (j = 1; j < primeArray.length && primeArray[j] <= Math.sqrt(i); j++) {
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
    //iterating by two becasue we are only checking odd numbers
    i += 2;
  }
  //We cannot use unshift here because this array gets used in the for loop in ascending order. We need to check in descending order on
  //on the array and remove the check for sqrt, which would make the processing time take longer.
  //While we could just as easily have a variable that is set to the the most recently discovered prime, but since we use the array in
  //the course of checking for primality, and hence cannot remove it, we end up with one more variable than we need.
  return primeArray[primeArray.length - 1];
}
console.log(primeFinder(10001));

//Does not assume 2 to be prime. Runs a bit slower
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
