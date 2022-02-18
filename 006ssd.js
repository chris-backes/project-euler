const num = 100

function sumSquareDifference(upperBound) {
  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= upperBound; i++) {
    sumSquare = sumSquare + i;

    squareSum = squareSum + (i * i);
  }
  sumSquare = sumSquare ** 2;

  return sumSquare - squareSum;
}
console.time()
console.log(sumSquareDifference(num));
console.timeEnd()

function sumSquareDifference2(upperBound) {
  let sumSquare = (upperBound * (upperBound + 1) / 2) ** 2; // Gauss Summation, squared
  let squareSum = upperBound * (upperBound + 1) * ((upperBound * 2 ) + 1) / 6;

  return sumSquare - squareSum;
}
console.time()
console.log(sumSquareDifference2(num));
console.timeEnd()