"use strict";
const mergeStringAlternatingly = (str1, str2) => {
    let mergedStr = '';
    let shorterStr = '';
    let largerStr = '';
    if (str1.length > str2.length) {
        shorterStr = str2;
        largerStr = str1;
    }
    else {
        shorterStr = str1;
        largerStr = str2;
    }
    for (let i = 0; i < shorterStr.length; i++) {
        mergedStr += (str1.charAt(i) + str2.charAt(i));
    }
    return mergedStr + largerStr.slice(shorterStr.length);
};
console.log(mergeStringAlternatingly('abc', 'pqr'));
console.log(mergeStringAlternatingly('ab', 'pqrs'));
console.log(mergeStringAlternatingly('abcd', 'pq'));
