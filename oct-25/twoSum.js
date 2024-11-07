"use strict";
const findTwoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
};
console.log(findTwoSum([2, 7, 11, 15], 9));
