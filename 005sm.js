//The least common multiple of any consecutive set of numbers beginning at 1 (or 2) is the product of the primes in that set, where each prime n is raised to the power p such that n^p is still less than the uppoer boundary of the set.
//This checks if a number is prime, then raises it to the highest power, and takes that set and multiplies them together

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
console.time('loop-complicated')
for (let i = 0; i < 20; i++) {
  leastCommonMultiple(20);
  leastCommonMultiple(15);
  leastCommonMultiple(25);
  leastCommonMultiple(200);
  leastCommonMultiple(100);
}
console.timeEnd('loop-complicated');


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
console.time('loop-simplified')
for (let i = 0; i < 20; i++) {
  smallestCommons([1,20]);
  smallestCommons([1,15]);
  smallestCommons([1,25]);
  smallestCommons([1,200]);
  smallestCommons([1,100]);
}
console.timeEnd('loop-simplified')

//Can process bottom limits which are not one or two. Recurive nature means that call stack is the major limiter
function getLCM3(arr) {
  const [bottom, top] = arr.sort((a, b) => a - b);
  let nums = Array(top - bottom + 1).fill().map((x, i) => i + bottom)

  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b)

  const lcm = (a, b) => (a * b) / gcd(a, b)

  return nums.reduce((a, b) => lcm(a, b));
}

getLCM3([1,20]);

