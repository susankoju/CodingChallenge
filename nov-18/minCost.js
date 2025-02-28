var getMinCostOfStairs = function (cost) {
    var n = cost.length;
    // Handle the base case if there are only two steps
    if (n === 2) {
        return Math.min(cost[0], cost[1]);
    }
    // Initialize the dp array where dp[i] will store the minimum cost to reach step i
    var dp = new Array(n);
    dp[0] = cost[0];
    dp[1] = cost[1];
    // Calculate the minimum cost to reach each step from 2 to n-1
    for (var i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    // The answer is the minimum of the cost to reach the last step or the second-last step
    return Math.min(dp[n - 1], dp[n - 2]);
};
console.log(getMinCostOfStairs([10, 15, 20]));
