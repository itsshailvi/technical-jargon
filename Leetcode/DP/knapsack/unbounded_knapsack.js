// unbounded knapsack
// value agar nahi le rhe h n-1 jao but agar le rhe h to ek baar firse bhi select kr skte h n pe hi jao bas


// rod cutting 
// coin change I
// coin change II
// maximum ribbon cut


function unboundedknapSack(val, wt, capacity) {
    let n = wt.length;
    let W = capacity
    
    let dp = new Array(n+1).fill(null).map(() => new Array(W+1).fill(-1));
    
    function helper (n, W){
        if(n === 0 || W===0){
            return 0
        }
        if(dp[n][W] != -1){
            return dp[n][W]
        }
        if(W >= wt[n-1]){
            dp[n][W] = Math.max((val[n-1] + helper(n, W-wt[n-1])), helper(n-1, W))
        }else{
            dp[n][W] = helper(n-1, W)
        }
        return dp[n][W]
    }
    return helper(n, W)
}