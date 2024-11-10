const getLargestPrimeFactor = (num: number): number | null => {
    for (let i = num; i > 1; i--) {
        if (num % i === 0) {
            let divisorCount = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    divisorCount++;
                }
            }
            if (divisorCount === 2) {
                return i;
            }
        }
    }

    return null;
}

console.log(getLargestPrimeFactor(15))
console.log(getLargestPrimeFactor(13195))
console.log(getLargestPrimeFactor(25698751))
console.log(getLargestPrimeFactor(940368980))
