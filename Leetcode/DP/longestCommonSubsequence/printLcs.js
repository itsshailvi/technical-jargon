// Print longest common subsequence
// similar to lcs , input same , operation same , o/p different prev - count , here - string print


function lcsRecursive(str1, str2, m, n) {
    if (m === 0 || n === 0) {
      return '';
    }
  
    if (str1[m - 1] === str2[n - 1]) {
      return lcsRecursive(str1, str2, m - 1, n - 1) + str1[m - 1];
    } else {
      const lcs1 = lcsRecursive(str1, str2, m - 1, n);
      const lcs2 = lcsRecursive(str1, str2, m, n - 1);
      return lcs1.length > lcs2.length ? lcs1 : lcs2;
    }
  }
  
  // Usage:
  const str1 = "AGGTAB";
  const str2 = "GXTXAYB";
  
  const result = lcsRecursive(str1, str2, str1.length, str2.length);
  console.log("LCS:", result);  // Output: GTAB
  