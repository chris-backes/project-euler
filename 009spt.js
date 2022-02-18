function tripletProduct(limit) {
  var a = 1;
  var b = 2;
  var c = 3;
  var pythoTrip = [];
  var arrayStoring = function () {
    pythoTrip[0] = a;
    pythoTrip[1] = b;
    pythoTrip[2] = c;
  };
  for (a = 1; a < limit / 3; a++) {
    if (
      Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) &&
      a + b + c === limit
    ) {
      arrayStoring();
    }
    for (b = 2; b < limit / 2; b++) {
      if (
        Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) &&
        a + b + c === limit
      ) {
        arrayStoring();
      }
      for (c = 3; c < limit; c++) {
        if (
          Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) &&
          a + b + c === limit
        ) {
          arrayStoring();
        }
      }
    }
  }
  return pythoTrip[0] * pythoTrip[1] * pythoTrip[2];
}
console.log(tripletProduct(1000));
