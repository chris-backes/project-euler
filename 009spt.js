// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// for (i = 3; i < limit /3; i++)
//     for j = i + 1; j < / 2
//         k = limit - j - i
// does a squard plus b squared equal c square? is the sum of a b and c 1000

function tripletProduct(limit) {
	for (let a = 3; a < limit / 3; a++) {
		for (let b = a + 1; b < limit / 2; b++) {
			for (let c = b + 1; c < limit; c++) {
				if (
					Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) &&
					a + b + c === limit
				) {
					return a * b * c;
				}
			}
		}
	}
	return "Nothing found";
}

console.log(tripletProduct(1000));

function tripletProduct2(num) {
	let limA = num / 3;
	let limB = num / 2;
	for (let a = 3; a < limA; a++) {
		for (let b = a + 1; b < limB; b++) {
			let c = num - a - b;
			if (c * c === a * a + b * b) {
				return a * b * c;
			}
		}
	}
	return "Nothing found";
}

console.log(tripletProduct2(1000));

// a = m2 − n2, b = 2 · m · n, c = m2 + n2

//if a + b + c = input, then  (m2 − n2) + (2 · m · n) + (m2 + n2) = input
// or n = (input/2)/m - m
// We eliminate the need for an additional loop

function tripletProduct3(num) {
	let m = 0;
	let n = () => {
		return num / 2 / m - m;
	};
	let isFound = false;
	while (!isFound && m < num) {
		m++;
		if (m > n() && Number.isInteger(n()) && n() > 0) {
			isFound = true;
		}
	}
	if (!Number.isInteger(n()) || n() < 0) {
		return "Nothing found";
	}
	return (m ** 2 + n() ** 2) * (m ** 2 - n() ** 2) * (2 * m * n());
}
console.time();
console.log(tripletProduct3(1000));
console.timeEnd();

module.exports = { tripletProduct, tripletProduct2, tripletProduct3 };
