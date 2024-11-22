const getUniquePathCount = (m: number, n: number): number => {
    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === n - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log(getUniquePathCount(3, 7));
