"use strict";
const getSumOfDigits = (num) => {
    let posNum = Math.abs(num);
    let sum = 0;
    while (posNum) {
        sum += posNum % 10;
        posNum = Math.floor(posNum / 10);
    }
    return sum;
};
console.log(getSumOfDigits(1234));
console.log(getSumOfDigits(-456));
