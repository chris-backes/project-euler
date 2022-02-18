function findMultiples(boundary) {
  let sum = 0;
  for (i = 1; i < boundary; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
console.log(findMultiples(400));

module.exports = findMultiples
