function palindromeProduct1(i, j) {
  let product = 0;
  let reverseProduct = 0;
  let result = 0

  while (i >= 0) {
    product = i * j;
    reverseProduct = parseInt(product.toString().split("").reverse().join(""))
    if (reverseProduct === product && product > result) {
      result = product
    }
    while (j >= 0) {
      product = i * j;
      reverseProduct = parseInt(product.toString().split("").reverse().join(""))
      if (reverseProduct === product && product > result) {
        result = product
      }
      j--;
    }
    j = i;
    i--;
  }
  return result
}
//highest number is first in the array
console.time('palindrome-1')
palindromeProduct1(999, 999);
console.timeEnd('palindrome-1')

Number.prototype.getReverse = function() {
  "use strict";
  let reverseNum = 0
  let num = this
  while(num > 0) {
    reverseNum = (10 * reverseNum) + (num % 10)
    num = Math.floor(num / 10)
  }
  return reverseNum
}

function getReverseNum(num) {
  let reverseNum = 0
  while (num > 0) {
    reverseNum = (10 * reverseNum) + (num % 10)
    num = Math.floor(num / 10)
  }
  return reverseNum
}

function palindromeProduct2(i, j) {
  let floor = (i + 1) / 10
  let product = 0;
  let reverseProduct = 0;
  let result = 0

  while (i > floor) {
    product = i * j;
    reverseProduct = product.getReverse()
    if (reverseProduct === product && result < product) {
      result = product
    }
    while (j > floor) {
      product = i * j;
      reverseProduct = product.getReverse()
      if (reverseProduct === product && result < product) {
        result = product
      }
      j--;
    }
    i--;
    j = i;
  }
  return result;
}

palindromeProduct2(999, 999)

module.exports = { palindromeProduct1, palindromeProduct2 }
