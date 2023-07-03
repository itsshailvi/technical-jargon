// Examples
// Input:
// N = 4
// arr[] = {geeksforgeeks, geeks, geek,
//          geezer}
// Output: gee
// Explanation: "gee" is the longest common
// prefix in all the given strings.

// Input: 
// N = 2
// arr[] = {hello, world}
// Output: -1
// Explanation: There's no common prefix
// in the given strings.

function(arr,n){
  arr = arr.sort()
  let x = 0 , let y = 0 ; let res;
  while(arr[0][x]< arr[0].length && arr[n-1][y] < arr[n-1].length){
    if(arr[0][x] !== arr[n-1][y]) break
      res = arr[0][x]
      x++
      y++
  }
  return res
}
