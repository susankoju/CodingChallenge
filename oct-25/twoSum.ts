const findTwoSum = (arr: number[], target: number): number[] => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]]
            }
        }
    }

    return [];
}

console.log(findTwoSum([2, 7, 11, 15], 9));
console.log(findTwoSum([11, 15, 2, 7], 9));
console.log(findTwoSum([11, 15, 2, 7, 1], 9));
console.log(findTwoSum([11, 15, 1, 7, 1], 9));
