function dOfN(nthDigit, divisor) {
  let numString = "";
  let multipliedDigits = 1;

  for (let i = 1; numString.length < nthDigit; i++) {
    j = i;
    numString = numString + j;
  }
  while (nthDigit >= 1) {
    multipliedDigits =
      multipliedDigits * parseInt(numString.charAt(nthDigit - 1));
    nthDigit = nthDigit / divisor;
  }
  return multipliedDigits;
}
console.log(dOfN(1000000, 10));
