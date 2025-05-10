
var minCost = function(n, cuts) {
    let m = cuts.length
    let dp = new Array(m+1).fill(null).map(() => new Array(n+1).fill(-1))
    function helper(n, m){
        if( n === 0 || m === 0){
            return 0
        }
        if(dp[m][n] !== -1){
            return dp[m][n]
        }
        if(n >= cuts[m-1]){
            dp[m][n] = Math.max((cuts[m-1]) + helper(n, m-1), helper(n-1, m-1))
        }else{
            dp[m][n] = helper(n-1, m-1)
        }
        return dp[m][n]
    }
    return helper(n,m)
};