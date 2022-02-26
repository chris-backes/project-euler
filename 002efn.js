function getEvenFibSum(boundary) {
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
console.time()
console.log(getEvenFibSum(400000000));
console.timeEnd()

//every third number of the series is even which can be proven by:
//any two odd numbers must equal an even number and 
//any two numbers where one is odd and the other even must yield an odd number
//since the first two numbers are odd, therefore, the next will be even, by the nature of the series
//hence the two after that once must also be odd, since the next one is odd (it is the sum of the even and the previous odd number)
//and the one after that must be odd, since it is the sum of the aforementioned even and the new odd number
function getEvenFibSum2(limit){
  let sum = 0
  let a = 1;
  let b = 1;
  let c = 2;
  while (c < limit) {
    sum += c
    a = c + b
    b = a + c
    c = a + b
  }
  return sum
}

console.time()
console.log(getEvenFibSum2(400000000));
console.timeEnd()

module.exports = { getEvenFibSum, getEvenFibSum2 }
