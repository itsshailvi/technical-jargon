// scrambled string
// great -> eatgr ---- 0(start),2 ---> n-2(strt), 2(length) -- for gr , now chdeck for eat
// bst -> iska graph banana , and the non leaf nodes ko swap krke scramble banana

function isScramble(s1, s2) {
    // If both strings are the same, return true
    if (s1 === s2) return true;
  
    // If lengths are different, return false
    if (s1.length !== s2.length) return false;
  
    // If sorted strings are not the same, return false (optimization)
    if (s1.split('').sort().join('') !== s2.split('').sort().join('')) {
      return false;
    }
  
    // Recursively check all possible splits
    for (let i = 1; i < s1.length; i++) {
      // Case 1: Check if the first part of s1 and the first part of s2 are scrambled
      // and the second part of s1 and second part of s2 are scrambled
      if (isScramble(s1.slice(0, i), s2.slice(0, i)) && isScramble(s1.slice(i), s2.slice(i))) {
        return true;
      }
      // Case 2: Check if the first part of s1 and the second part of s2 are scrambled
      // and the second part of s1 and the first part of s2 are scrambled
      if (isScramble(s1.slice(0, i), s2.slice(s2.length - i)) && isScramble(s1.slice(i), s2.slice(0, s2.length - i))) {
        return true;
      }
    }
  
    // If none of the above conditions are met, return false
    return false;
  }
  
  // Example usage
  const s1 = "great";
  const s2 = "rgeat";
  console.log(isScramble(s1, s2)); // Output: true
  
  const s1b = "abcde";
  const s2b = "caebd";
  console.log(isScramble(s1b, s2b)); // Output: false
  