//what all wt to add in bag so that we can have ,max profit .


//Recursive
function knapsack01(weights, values, W, n) {
    if (n === 0 || W === 0) return 0;

    if (weights[n - 1] > W) { 
        return knapsack01(weights, values, W, n - 1); // skip current
    }

    // Max of pick or skip
    return Math.max(
        values[n - 1] + knapsack01(weights, values, W - weights[n - 1], n - 1),
        knapsack01(weights, values, W, n - 1)
    );
}

// memoization 
function knapsack(W, val, wt) {
    let n = wt.length
    let dp = new Array(n+1).fill(null).map(() => new Array(W+1).fill(-1))
    
    function helper(n, W){
        if(n === 0 || W === 0) return 0
        if(dp[n][W] != -1){
            return dp[n][W]
        }
        if(W >= wt[n-1]){
            dp[n][W] = Math.max((val[n-1] + helper(n-1, W-wt[n-1])), 
            helper(n-1,W))
        }else{
            dp[n][W] = helper(n-1, W)
        }
        return dp[n][W]
    }
    return helper(n,W)
        
    }

// top down approach 
for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
        if (weights[i - 1] > w) {
            dp[i][w] = dp[i - 1][w]; // item can't be included
        } else {
            const include = values[i - 1] + dp[i - 1][w - weights[i - 1]];
            const exclude = dp[i - 1][w];
            dp[i][w] = Math.max(include, exclude);
        }
    }
}

return dp[n][W];

