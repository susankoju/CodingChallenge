"use strict";
const isInArray = (num, arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(num))
            return true;
    }
    return false;
};
console.log(isInArray(3, [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]));
console.log(isInArray(13, [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]));
