// matrix chain multiplication
// printing mcm
// exaluate Expr to T/F boolean parathesis
// min/max value of exprn
// palindrome partetioning 
// scramble string
// egg dropping prb

// I/P - arr/str
// i , j in arr break it into k parts (i=k ), (k+1, j) 
// gives temp ans and then  put operation
// i === j (1 element) cant form matrix
// i > j (no element)
// max cost of matrix  (40 x 30) (30 x 10 ) = 40 x 30 x 10 ;   new array : 40 x 10
// so the array we have we need to form matrix from there - [40, 20, 30, 10, 30] -> arr[i-1] x arr[i] (i = 1)
// 

// recursive
function matrixChainOrder(p, i, j) {
    // Base case: If there's only one matrix, no multiplication needed
    if (i === j) return 0;
  
    let minCost = Infinity;
  
    // Try different places to split the chain of matrices
    for (let k = i; k < j; k++) {
      // Cost of multiplying matrices A[i..k] and A[k+1..j]
      const cost = matrixChainOrder(p, i, k) + matrixChainOrder(p, k + 1, j) + p[i - 1] * p[k] * p[j];
      
      // Find the minimum cost
      minCost = Math.min(minCost, cost);
    }
  
    return minCost;
  }
  function matrixChainMultiplication(dimensions) {
    return matrixChainOrder(dimensions, 1, dimensions.length - 1);
  }