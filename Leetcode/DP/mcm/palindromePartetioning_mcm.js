// palindrome partening : minimum no of partetioning to get palindrome 
//  string s = '', s = 'a' partition 0, and if is palindrome no participation needed


function isPalindrome(str, i, j) {
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  
  function solve(str, i, j, result) {
    // Base case: If we've processed the entire string
    if (i > j) {
      return 0; // No more cuts are needed
    }
  
    // If the entire substring is a palindrome, no need for cuts
    if (isPalindrome(str, i, j)) {
      return 0;
    }
  
    let minCuts = Infinity;
  
    // Try all possible places to make a cut between i and j
    for (let k = i; k < j; k++) {
      // If the substring from i to k is a palindrome, recurse on the right part
      if (isPalindrome(str, i, k)) {
        // Recursively solve for the right part (k+1 to j)
        const cuts = 1 + solve(str, k + 1, j, result);
        minCuts = Math.min(minCuts, cuts);
      }
    }
  
    return minCuts;
  }
  
  function palindromePartitioning(str) {
    return solve(str, 0, str.length - 1, []);
  }
  
  // Example usage
  const input = "aab";
  const partitions = palindromePartitioning(input);
  console.log(partitions); // Output: 1
  