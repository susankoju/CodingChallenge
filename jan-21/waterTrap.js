var getWaterTrap = function (heights) {
    var left = 0;
    var right = heights.length - 1;
    var leftMax = 0;
    var rightMax = 0;
    var result = 0;
    while (left < right) {
        if (heights[left] < heights[right]) {
            if (heights[left] >= leftMax) {
                leftMax = heights[left];
            }
            else {
                result += leftMax - heights[left];
            }
            left++;
        }
        else {
            if (heights[right] >= rightMax) {
                rightMax = heights[right];
            }
            else {
                result += rightMax - heights[right];
            }
            right--;
        }
    }
    return result;
};
console.log(getWaterTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
