let romanNum: string = '';
const romanMap: { [key: string]: number } = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

const romanToInt = (roman: string): number => {
    const romanArr: string[] = roman.split('');

    let int = 0
    while (romanArr.length > 0) {
        if (romanArr.length > 1 && romanMap[romanArr[0]] < romanMap[romanArr[1]]) {
            int += (romanMap[romanArr[1]] - romanMap[romanArr.shift() as string])
            romanArr.shift() // Needed second item
        } else if (romanArr.length > 1 && romanMap[romanArr[0]] === romanMap[romanArr[1]]) {
            if (romanArr.length > 2 && romanMap[romanArr[0]] === romanMap[romanArr[2]]) {
                int += (romanMap[romanArr.shift() as string] + romanMap[romanArr.shift() as string] + romanMap[romanArr.shift() as string])
            } else {
                int += (romanMap[romanArr.shift() as string] + romanMap[romanArr.shift() as string])
            }
        } else {
            int += romanMap[romanArr.shift() as string]
        }
    }

    return int;
}

romanNum = 'I';
console.log(romanToInt(romanNum));

romanNum = 'IV';
console.log(romanToInt(romanNum));

romanNum = 'III';
console.log(romanToInt(romanNum));

romanNum = 'LVIII';
console.log(romanToInt(romanNum));

romanNum = 'MCMXCIV';
console.log(romanToInt(romanNum));

romanNum = 'XM';
console.log(romanToInt(romanNum));
