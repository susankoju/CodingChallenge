let parenthesisStr: string = '';
const parenthesisMap: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
}

const isParenthesisValid = (parenthesisStr: string): boolean => {
    let isValid = true;
    const openParenthesis = [];
    const parenthesisArr: string[] = parenthesisStr.split('');
    for (let i = 0; i < parenthesisArr.length; i++) {
        if (Object.keys(parenthesisMap).includes(parenthesisArr[i])) {
            openParenthesis.push(parenthesisArr[i]);
        } else if (!openParenthesis.length || parenthesisArr[i] !== parenthesisMap[openParenthesis.pop() as string]) {
            isValid = false;
            break;
        }
    }

    if (openParenthesis.length) return false;

    return isValid;
}

parenthesisStr = '()';
console.log(isParenthesisValid(parenthesisStr));

parenthesisStr = '()[]{}';
console.log(isParenthesisValid(parenthesisStr));

parenthesisStr = '(]';
console.log(isParenthesisValid(parenthesisStr));

parenthesisStr = '([])';
console.log(isParenthesisValid(parenthesisStr));
