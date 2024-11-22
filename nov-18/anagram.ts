const isAnagram = (s: string, t: string): boolean => {
    const sArr = s.split('');
    const tArr = t.split('');

    if(sArr.length !== tArr.length) {
        return false;
    }

    tArr.map((tEle) => {
        const index = sArr.indexOf(tEle);
        if(index < 0) {
            return false;
        }
        sArr.splice(index, 1);
    });

    return !sArr.length;
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))
