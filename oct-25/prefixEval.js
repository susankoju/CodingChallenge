"use strict";
let exp = '';
const operators = {
    "+": true,
    "-": true,
    "/": true,
    "*": true,
};
const evaluate = (operator, leftOperand, rightOperand) => {
    switch (operator) {
        case "+": return (parseFloat(leftOperand) + parseFloat(rightOperand)).toString();
        case "-": return (parseFloat(leftOperand) - parseFloat(rightOperand)).toString();
        case "*": return (parseFloat(leftOperand) * parseFloat(rightOperand)).toString();
        case "/": {
            if (rightOperand === '0')
                return null;
            return (parseFloat(leftOperand) / parseFloat(rightOperand)).toString();
        }
        default: return null;
    }
};
const evalPrefix = (exp) => {
    const expArr = exp.split(' ');
    while (expArr.length >= 3) {
        let indexOfOperator = expArr.length - 1;
        let operator = null;
        while (indexOfOperator >= 0 && !operator) {
            if (operators[expArr[indexOfOperator]]) {
                operator = expArr[indexOfOperator];
            }
            else {
                indexOfOperator--;
            }
        }
        if (!operator || indexOfOperator > expArr.length - 3) {
            return null;
        }
        const evaluatedValue = evaluate(operator, expArr[indexOfOperator + 1], expArr[indexOfOperator + 2]);
        if (evaluatedValue === null) {
            return null;
        }
        expArr.splice(indexOfOperator, 3, evaluatedValue);
    }
    if (expArr.length > 1) {
        return null;
    }
    return parseFloat(expArr[0]);
};
exp = '+ 5 3';
console.log(evalPrefix(exp));
exp = '* + 2 3 4';
console.log(evalPrefix(exp));
exp = '- 10 / 20 4';
console.log(evalPrefix(exp));
exp = '/ + 1 1 - 5 2';
console.log(evalPrefix(exp));
exp = '+ 5';
console.log(evalPrefix(exp));
exp = '/ 5 0';
console.log(evalPrefix(exp));
