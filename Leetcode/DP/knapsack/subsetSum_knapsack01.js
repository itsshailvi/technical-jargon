//if this array present a subset that has sum equals to SUM (boolean ans)
//a) arr: [], sum 0 , yes empty subset
//b) arr: [2], sum 0, yes empty subset
//c) arr[2,3], sum 0, yes empty subset
//d) arr[], sum 1 , no; arr[], sum 2, no sly for any sum if arr has nothing other than zero it is not possible.
//so sum is zero it is always true , and n=0 its true but for any other value of n it is false

//Recursive
function isSubsetSum(arr, n, sum) {
    if (sum === 0) return true;      // empty subset adds up to 0
    if (n === 0) return false;       // no elements left, can't form sum

    if (arr[n - 1] > sum) {
        return isSubsetSum(arr, n - 1, sum); // skip current element
    }

    // Check including or excluding current element
    return isSubsetSum(arr, n - 1, sum) || isSubsetSum(arr, n - 1, sum - arr[n - 1]);
}