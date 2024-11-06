"use strict";
let parenthesisStr = '';
const parenthesisMap = {
    "(": ")",
    "{": "}",
    "[": "]",
};
const isParenthesisValid = (parenthesisStr) => {
    let isValid = true;
    const openParenthesis = [];
    const parenthesisArr = parenthesisStr.split('');
    for (let i = 0; i < parenthesisArr.length; i++) {
        if (Object.keys(parenthesisMap).includes(parenthesisArr[i])) {
            openParenthesis.push(parenthesisArr[i]);
        }
        else if (!openParenthesis.length || parenthesisArr[i] !== parenthesisMap[openParenthesis.pop()]) {
            isValid = false;
            break;
        }
    }
    if (openParenthesis.length)
        return false;
    return isValid;
};
parenthesisStr = '()';
console.log(isParenthesisValid(parenthesisStr));
parenthesisStr = '()[]{}';
console.log(isParenthesisValid(parenthesisStr));
parenthesisStr = '(]';
console.log(isParenthesisValid(parenthesisStr));
parenthesisStr = '([])';
console.log(isParenthesisValid(parenthesisStr));
