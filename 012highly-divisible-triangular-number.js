//under construction

function highlyDivTriNumber(divisors) {
  let divisorsArray = [];
  while (divisorsArray.length < divisors - 2) {
    divisorsArray = [];
    let triangularNumber = 1;
    let increment = 1;
    for (let i = 1; i <= triangularNumber / 2; i++) {
      if (triangularNumber % i === 0) {
        divisorsArray.push(i);
      }
    }
    increment++;
    triangularNumber = triangularNumber + increment;
  }
  return triangularNumber;
}
console.log(highlyDivTriNumber(500));
