const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; // Base Case

    let mid = Math.floor(arr.length / 2);
    
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    const finalArr = []; 
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            finalArr.push(left[i]);
            i++;
        } else {
            finalArr.push(right[j]);
            j++;
        }
    }

    return [...finalArr, ...left.slice(i), ...right.slice(j)];
};
