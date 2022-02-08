//The least common multiple of any consecutive set of numbers beginning at 1 (or 2) is the product of the primes in that set, where each prime n is raised to the power p such that n^p is still less than the uppoer boundary of the set.
//This checks if a number is prime, then raises it to the highest power, and takes that set and multiplies them together
console.time()
function leastCommonMultiple(upperBound) {
  var factors = [];
  function prime() {
    let j = 2;
    let primeLogger = 0;
    while (j < upperBound) {
      //the less than or equals sign below solves the edge case of four getting passed through since if this were just less than, 4 would get pushed.
      for (let m = 2; m <= j / 2; m++) {
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
  function highestExponent() {
    for (let i = 0; i < factors.length; i++) {
      var tempStorage;
      for (let n = 1; Math.pow(factors[i], n) < upperBound; n++) {
        tempStorage = Math.pow(factors[i], n);
      }
      factors[i] = tempStorage;
    }
  }
  prime();
  highestExponent();
  return factors.reduce((a, b) => a * b);
}
console.log(leastCommonMultiple(20));
console.timeEnd();

console.time()
function smallestCommons(arr) {
  let bottom = arr[0] < arr[1] ? arr[0] : arr[1]
  let top = arr[0] > arr[1] ? arr[0] : arr[1]
  let nums = Array(top - bottom + 1).fill().map((x, i) => i + bottom)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        nums[i] = nums[i] /nums[j]
      }
    }
  }
  return nums.reduce((a, b) => a * b);
}

console.log(smallestCommons([1,20]));
console.timeEnd()