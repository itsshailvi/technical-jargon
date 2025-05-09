//longest palindromic subseq : uagbcba ---> abcba, bcb, b , longest abcba its length
// how lcs (string ek hi h)
// b is reverse of first string and get lcs

function lcs(str1, str2) {
    if (str1.length === 0 || str2.length === 0) return 0;
  
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      return 1 + lcs(str1.slice(0, -1), str2.slice(0, -1));
    }
  
    const option1 = lcs(str1.slice(0, -1), str2);
    const option2 = lcs(str1, str2.slice(0, -1));
  
    return Math.max(option1, option2);
  }
  
  function longestPalindromicSubsequence(s) {
    const reversed = s.split('').reverse().join('');
    return lcs(s, reversed);
  }
  