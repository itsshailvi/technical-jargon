//min subset sum difference.
// so 2 subset should have difference minimum.
// taking range approach adding all the available subset in the range , and put it in a set. 
// s1 + s2 = total ; s2 - s1 = difference ; s2 = total - s1 , hence total - 2s1 = difference.

function minSubsetSumDiff(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    const subsetSums = new Set();

    function getSubsetSums(i, currentSum) {
        if (i === arr.length) {
            subsetSums.add(currentSum);
            return;
        }
        getSubsetSums(i + 1, currentSum + arr[i]); // include
        getSubsetSums(i + 1, currentSum);          // exclude
    }

    getSubsetSums(0, 0);

    let minDiff = Number.MAX_VALUE;
    for (let s1 of subsetSums) {
        const diff = Math.abs(total - 2 * s1);
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}
