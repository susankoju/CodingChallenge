const findUnique = (arr: number[]): number[] => {
    const uniqueArr: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let unique = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                unique = false;
                break;
            }
        }

        if (unique) {
            uniqueArr.push(arr[i])
        }
    }

    return uniqueArr;
}

console.log(findUnique([4, 3, 2, 4, 1, 3, 5, 6, 5]))
