const containDuplicate = (arr: number[]): boolean => {
    const containingMap: { [key: number]: boolean } = {};

    for (let i = 0; i < arr.length; i++) {
        if (containingMap[arr[i]]) {
            return true;
        }

        containingMap[arr[i]] = true;
    }

    return false;
}

console.log(containDuplicate([1, 2, 3, 1]));
console.log(containDuplicate([1, 2, 3, 4]));
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
