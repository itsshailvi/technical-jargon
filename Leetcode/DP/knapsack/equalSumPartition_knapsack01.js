//array ko 2 subset me divide krna h jissse dono ka sum same aaye.in T/F [1, 5, , 5, 11] => [1,5,5], [11]
//so in order to have equal sum partition we should have 2 odd sum (1+1) even , or 2 even sum (2+2) even so sum should always be even . 
//now we are taken sum/2 and putting it into subset and if it exist next half will sure be there. T/F

function canPartitionRecursive(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;

    const target = total / 2;

    function isSubsetSum(n, sum) {
        if (sum === 0) return true;
        if (n === 0) return false;

        if (arr[n - 1] > sum) {
            return isSubsetSum(n - 1, sum); // skip current element
        }

        // include or exclude the current element
        return isSubsetSum(n - 1, sum) || isSubsetSum(n - 1, sum - arr[n - 1]);
    }

    return isSubsetSum(arr.length, target);
}
