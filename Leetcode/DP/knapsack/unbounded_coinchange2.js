// Coin change problem: Minimum number of coins


function unboundedKnapsack(val, wt, capacity) {
    let n = wt.length;
    
    // Initialize a memoization table (2D array)
    let dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(-1));
    
    // Recursive helper function
    function helper(n, W) {
        if (W === 0) {
            return 0;  // If the capacity is 0, the maximum value is 0
        }
        if (n === 0) {
            return 0;  // If no items are left, the maximum value is 0
        }

        // Check if the result is already calculated
        if (dp[n][W] !== -1) {
            return dp[n][W];
        }

        // If the current item's weight is less than or equal to the remaining capacity
        if (wt[n - 1] <= W) {
            // Either take the item or skip it (take multiple of the same item)
            dp[n][W] = Math.max(
                val[n - 1] + helper(n, W - wt[n - 1]),  // Take the current item
                helper(n - 1, W)                        // Skip the current item
            );
        } else {
            // Skip the current item if its weight is more than the remaining capacity
            dp[n][W] = helper(n - 1, W);
        }

        return dp[n][W];
    }
    
    // Call the helper function with the full capacity and all items
    return helper(n, capacity);
}
