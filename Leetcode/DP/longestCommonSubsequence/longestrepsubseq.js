// longest repeating subsequence 
// str = 'A A B E B C D D' (order same , can be discontinous) o/p length
//  jo repeat krne ka seq h e.g., A B D
//  create str 2 same 
// then find longest common subseq
// now we need to remove E, c from it and rest AABBDD we need to ABD 
// so since both of the strings will have E & c in same sequence so they can be deleted when i === j also in this case duplicates will also get deleted

function lrs(str1, str2, i = str1.length, j = str2.length) {
    // Base case
    if (i === 0 || j === 0) return 0;
  
    // If characters match and indexes are different
    if (str1[i - 1] === str2[j - 1] && i !== j) {
      return 1 + lrs(str1, str2, i - 1, j - 1);
    }
  
    // Else explore both options
    return Math.max(
      lrs(str1, str2, i - 1, j),
      lrs(str1, str2, i, j - 1)
    );
  }
  
  function longestRepeatingSubsequence(str) {
    return lrs(str, str);
  }
  