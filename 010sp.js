function sumOfPrimes(upperBound) {
	let factors = [2];
	let sumPrimes = 2;
	let j = 3;
	let primeLogger = false;
	while (j < upperBound) {
		for (let m = 0; factors[m] <= Math.sqrt(j); m++) {
			if (j % factors[m] === 0) {
				primeLogger = true;
			}
		}
		if (primeLogger === false) {
			factors.push(j);
			sumPrimes = sumPrimes + j;
		}
		primeLogger = false;
		j = j + 2;
	}
	return sumPrimes;
}
console.time();
console.log(sumOfPrimes(2000000));
console.timeEnd();
