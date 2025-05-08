//count of subset sum with given sum
//here we are counting all the subsets which are returning the given return .


function countSubsets(arr, n, sum) {
    if (sum === 0) return 1;      // 1 valid way (empty subset)
    if (n === 0) return 0;        // no items, can't form sum

    if (arr[n - 1] > sum) {
        return countSubsets(arr, n - 1, sum); // skip current
    }

    // Include or exclude the current item
    return countSubsets(arr, n - 1, sum) + countSubsets(arr, n - 1, sum - arr[n - 1]);
}
