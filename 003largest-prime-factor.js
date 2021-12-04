let num = 600851475143;
let primeArray = [];

for (i = 1; i < num / 2; i++) {
  if (num % i === 0) {
    primeArray.push(i);
  }
}
console.log(primeArray[primeArray.length - 1]);
