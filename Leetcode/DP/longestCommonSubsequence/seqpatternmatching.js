// sequence pattern matching
// if a is subseq of string b ; includes wala type h
// o/p T/F

function lcs(a, b, m = a.length, n = b.length) {
    // Base case
    if (m === 0 || n === 0) return 0;
  
    // If characters match
    if (a[m - 1] === b[n - 1]) {
      return 1 + lcs(a, b, m - 1, n - 1);
    }
  
    // If not, skip one from either string
    return Math.max(
      lcs(a, b, m - 1, n),
      lcs(a, b, m, n - 1)
    );
  }
  
  function isSubsequenceUsingLCS(a, b) {
    const lcsLength = lcs(a, b);
    return lcsLength === a.length;
  }
  