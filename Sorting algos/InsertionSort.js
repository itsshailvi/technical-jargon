function insertionSort(arr){
    let n = arr.length
    let x , j ;
    for(let i = 1 ; i < n ; i++){
         x = arr[i]
         y = i - 1
         
         while(y >=0 && arr[y] > x){
             arr[y+1] = arr[y]
             y--
         }
         arr[y+1] = x
    }
    return arr
}
