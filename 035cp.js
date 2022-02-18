//under construction

function circularPrime(upperBound) {
    let primeArray = [2, 3, 5, 7];
    let i = 11;
    while (i < upperBound) {
        let primeLogger = false;
        for (j = 1; primeArray[j] <= Math.sqrt(i); j++) {
            if (i % primeArray[j] === 0) {
                primeLogger = true;
                break;
            }
        }
        if (primeLogger === false) {
            primeArray.push(i);
        }
        i += 2;
    }
    let counter = 4
    return primeArray[primeArray.length - 1];
}

circularPrime(1000000)