function primeFactor(upperBound) {
  let lastFactor = 1
  while (upperBound % 2 === 0) {
    upperBound = upperBound / 2
    lastFactor = 2
  }
  let factor = 3
  let maxFactor = Math.sqrt(upperBound)
  while (upperBound > 0 && factor <= maxFactor) {
    if (upperBound % factor === 0) {
      upperBound = upperBound / factor
      lastFactor = factor;
      while (upperBound % factor === 0) {
        upperBound = upperBound / factor
      }
      maxFactor = Math.sqrt(upperBound)
    }
    factor = factor + 2
  }
  return upperBound === 1 ? lastFactor : upperBound
}
console.log(primeFactor(516));

module.exports = primeFactor