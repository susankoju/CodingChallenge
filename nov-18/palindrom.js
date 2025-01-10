"use strict";
const getAlphanumeric = (str) => {
    return str.replace(/[^a-z0-9]/gi, '');
};
const isPalindrome = (str) => {
    const reversed = getAlphanumeric(str).toUpperCase().split('').reverse().join('');
    return getAlphanumeric(str).toUpperCase() === reversed;
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
