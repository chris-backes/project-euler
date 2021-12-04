let i = 999;
let j = 999;
let product = 0;
let reverseProduct = 0;
let array = [];

while (i >= 100) {
  product = i * j;
  product = product.toString();
  reverseProduct = product;
  reverseProduct = reverseProduct.split("");
  reverseProduct = reverseProduct.reverse();
  reverseProduct = reverseProduct.join("");
  if (reverseProduct === product) {
    array.push(product);
  }
  while (j >= 100) {
    product = i * j;
    product = product.toString();
    reverseProduct = product;
    reverseProduct = reverseProduct.split("");
    reverseProduct = reverseProduct.reverse();
    reverseProduct = reverseProduct.join("");
    if (reverseProduct === product) {
      array.push(product);
    }
    j--;
  }
  i--;
}
array.sort((a, b) => a > b);
//highest number is first in the array
console.log(array);
