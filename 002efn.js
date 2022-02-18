function evenFib(boundary) {
  let i = 1;
  let j = 1;
  let fib = 0;

  while (i < boundary || j < boundary) {
    if (i % 2 === 0 && i < boundary) {
      fib = fib + i;
    }
    i = i + j;
    if (j % 2 === 0 && j < boundary) {
      fib = fib + j;
    }
    j = i + j;
  }
  return fib;
}
//answer
console.log(evenFib(150));

module.exports = evenFib
