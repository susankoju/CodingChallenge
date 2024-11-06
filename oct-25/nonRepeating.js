"use strict";
const getNonRepeating = (sortedArr) => {
    for (let i = 0; i < sortedArr.length; i++) {
        if (i === 0 && sortedArr[i] !== sortedArr[i + 1]) {
            return sortedArr[i];
        }
        else if (i === sortedArr.length - 1 && sortedArr[i] !== sortedArr[i - 1]) {
            return sortedArr[i];
        }
        else if (sortedArr[i] !== sortedArr[i - 1] && sortedArr[i] !== sortedArr[i + 1]) {
            return sortedArr[i];
        }
    }
};
console.log(getNonRepeating([1, 1, 2, 3, 3, 4, 4]));
console.log(getNonRepeating([5, 1, 1, 3, 3, 4, 4]));
console.log(getNonRepeating([1, 1, 3, 3, 4, 4, 9]));
