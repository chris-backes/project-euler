function sumOfPrimes(limit) {
	let factors = [2];
	let sumPrimes = 2;
	let j = 3;
	let isPrime = false;
	while (j < limit) {
		for (let m = 1; factors[m] <= Math.sqrt(j); m++) {
			if (j % factors[m] === 0) {
				isPrime = true;
				break;
			}
		}
		if (!isPrime) {
			factors.push(j);
			sumPrimes += j;
		}
		isPrime = false;
		j += 2;
	}
	return sumPrimes;
}

let a = sumOfPrimes(2000000)
console.log(a)
