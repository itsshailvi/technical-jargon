const mergeSort = (arr) => {
    if(arr.length <= 1) return arr
    // let mid = arr.slice(0,1) + Math.floor((arr[arr.length-1] - arr[0])/2)
    let high = arr.length
    let mid = Math.floor((high) / 2); 
    // let mid = Math.floor( 0 + (arr.length-1 - 0)/2 )
    // mid = Math.min(mid, arr.length-1 )
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    
    return merge(left,right)
}

const merge = (left, right) => {
    const finalArr = []; 
    let i =0, j=0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            finalArr.push(left[i])
            i++
        }else{
            finalArr.push(right[j])
            j++
        }
    }
    
    return [...finalArr , ...left.slice(i), ...right.slice(j)]
