// s1 - s2 = difference 
//s1 + s2 = sum(array
//adding above 2 equations we get 2s1 = diff + sum, get value of s1 , and that would be 
// sum of subset1 would be s1 = (diff + sum)/2
// now to get s2 value from equation 1 u get s2 value.
// by using number of count subset sum


// Recursion

function countSubsetsWithDiff(arr, diff) {
    const total = arr.reduce((a, b) => a + b, 0);
    const target = (total + diff) / 2;

    if ((total + diff) % 2 !== 0 || target < 0) return 0;

    return countSubsetSumRecursive(arr, arr.length - 1, target);
}

function countSubsetSumRecursive(arr, i, sum) {
    // Base Cases
    if (sum === 0) return 1;
    if (i < 0) return 0;

    if (arr[i] <= sum) {
        // Include + Exclude
        return countSubsetSumRecursive(arr, i - 1, sum - arr[i]) +
               countSubsetSumRecursive(arr, i - 1, sum);
    } else {
        // Exclude
        return countSubsetSumRecursive(arr, i - 1, sum);
    }
}


// DP
function countSubsetsWithDiff(arr, diff) {
    const total = arr.reduce((a, b) => a + b, 0);
    const target = (total + diff) / 2;

    if ((total + diff) % 2 !== 0 || target < 0) return 0;

    return countSubsetsWithSum(arr, target);
}

function countSubsetsWithSum(arr, sum) {
    const n = arr.length;
    const dp = Array(n + 1).fill().map(() => Array(sum + 1).fill(0));

    // Base case: sum = 0 → 1 subset: the empty set
    for (let i = 0; i <= n; i++) dp[i][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= sum; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][sum];
}
