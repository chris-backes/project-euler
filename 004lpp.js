function palindromeProduct(i, j) {
  let init = 1
  let product = 0;
  let reverseProduct = 0;
  let array = [];

  while (i >= 0) {
    product = i * j;
    product = product.toString();
    reverseProduct = product;
    reverseProduct = reverseProduct.split("");
    reverseProduct = reverseProduct.reverse();
    reverseProduct = reverseProduct.join("");
    if (reverseProduct === product) {
      array.push(product);
    }
    while (j >= 0) {
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
    j = init;
    i--;
  }
  array.sort((a, b) => b - a);
  return array[0];
}
//highest number is first in the array
console.log(palindromeProduct(999, 999));

module.exports = palindromeProduct
