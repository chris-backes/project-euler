function sumSquareDifference(upperBound) {
  let sum = 0;
  for (let i = 0; i <= upperBound; i++) {
    sum = sum + i;
  }
  sum = sum * sum;

  let square = 0;
  let squareSum = 0;
  for (let j = 0; j <= 100; j++) {
    square = j;
    square = square * square;
    squareSum = squareSum + square;
  }
  return sum - squareSum;
}
console.log(sumSquareDifference(100));
