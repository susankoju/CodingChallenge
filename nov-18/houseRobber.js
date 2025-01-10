"use strict";
const maxRob = (nums) => {
    let maxRob = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let rob = 0;
        for (let j = i; j < nums.length; j += 2) {
            rob += nums[j];
        }
        if (rob > maxRob) {
            maxRob = rob;
        }
    }
    return maxRob;
};
console.log(maxRob([1, 2, 3, 1]));
console.log(maxRob([2, 7, 9, 3, 1]));
