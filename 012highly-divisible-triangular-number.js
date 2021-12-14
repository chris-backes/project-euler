function highlyDivTriNumber(divisors) {
  var divisorsArray = [];
  while (divisorsArray.length < divisors - 2) {
    divisorsArray = [];
    var triangularNumber = 1;
    var increment = 1;
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
debugger;
console.log(highlyDivTriNumber(500));
