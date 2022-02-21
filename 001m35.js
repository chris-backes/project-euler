function findMultiples(boundary) {
  let sum = 0;
  for (i = 1; i < boundary; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

console.time()
console.log(findMultiples(400));
console.timeEnd();

function findMultiples2(boundary, num1, num2) {
  function gaussSum(passedNum, multiplier) {
    const newNum = Math.floor((passedNum - 1) / multiplier)
    return newNum * (newNum + 1) / 2 * multiplier
  }
  return gaussSum(boundary, num1) + gaussSum(boundary, num2) - gaussSum(boundary, num1 * num2)
}

console.time()
console.log(findMultiples2(400, 3, 5))
console.timeEnd()

module.exports = { findMultiples, findMultiples2 }
