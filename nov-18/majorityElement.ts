const findMajorityElement = (arr: number[]): number => {
  let majorityElem = arr[0];
  let maxCount = 0;
  
  for (let i = 1; i < arr.length; i++) {
    let count = 0;
    if (arr[i] === majorityElem) {
      count++;
    }

    if (count > maxCount) {
      majorityElem = arr[i];
      maxCount = count;
    }
  }

  return majorityElem;
};

console.log(findMajorityElement([3,2,3]));
console.log(findMajorityElement([2,2,1,1,1,2,2]));
