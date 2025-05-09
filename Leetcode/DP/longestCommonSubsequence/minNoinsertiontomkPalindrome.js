// minimum number of insertion to make it palindrome
// S = 'a c b c b d a'
//  s = 'agbcba' - bcb, c, abcba ---> abcba since here would be min number of now to make palindrome w/o delete add same extra
// and that would be , length - lcs


function lcs(str1, str2) {
    if (str1.length === 0 || str2.length === 0) return 0;
  
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      return 1 + lcs(str1.slice(0, -1), str2.slice(0, -1));
    }
  
    const option1 = lcs(str1.slice(0, -1), str2);
    const option2 = lcs(str1, str2.slice(0, -1));
  
    return Math.max(option1, option2);
  }
  
  function minDeletionsToPalindrome(s) {
    const reversed = s.split('').reverse().join('');
    const lpsLength = lcs(s, reversed);
    return s.length - lpsLength;
  }
  