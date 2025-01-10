const findUniqueChar = (str: string): string | number => {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) {
      return strArr[i];
    }
  }

  return -1;
}

console.log(findUniqueChar('swiss'));
console.log(findUniqueChar('aabbcc'));
