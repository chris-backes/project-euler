function powerDigitSum(powerOfTwo) {
  let powerString = "0b1";
  for (let i = 0; i < powerOfTwo; i++) {
    powerString = powerString + 0;
  }
  let bigString = BigInt(powerString).toString();
  let digitSum = 0
  for (let val of bigString) {
    digitSum = digitSum + parseInt(val)
  }
  return digitSum;
}
console.log(powerDigitSum(1000));
