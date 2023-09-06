//Given a sorted and rotated array A of N distinct elements which are rotated at some point, and given an element K. The task is to find the index of the given element K in array A.
//Input:
//N = 9
//A[] = {5,6,7,8,9,10,1,2,3}
//K = 10
//Output: 5
//Explanation: 10 is found at index 5.....

function findKIndex (arr, k){
  let arr = arr.sort();
  for(let i = 0 ; i < arr.length ; i++ ) {
    if(arr[i] === k){
      return i
    }
  }
}
