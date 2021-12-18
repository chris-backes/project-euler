//Under Construction

function powerDigitSum(powerOfTwo) {
  let powerString = "0b1";
  digitSum = 0;
  for (let i = 0; i < powerOfTwo; i++) {
    powerString = powerString + 0;
  }
  debugger;
  let bigString = BigInt(powerString);
  for (let i = 0; i < bigString.length - 1; i++) {
    digitSum = digitSum + bigString.charAt(i);
  }
  return digitSum;
}
console.log(powerDigitSum(1000));
