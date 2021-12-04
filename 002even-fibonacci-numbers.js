let i = 1;
let j = 1;
let array = [];
let fib = 0;

while (i < 4000000 || j < 4000000) {
  if (i % 2 === 0) {
    array.push(i);
    fib = fib + i;
  }
  i = i + j;
  if (j % 2 === 0) {
    array.push(j);
    fib = fib + j;
  }
  j = i + j;
}
//not the answer, just helps verify the function runs correctly
console.log(array);
//answer
console.log(fib);
