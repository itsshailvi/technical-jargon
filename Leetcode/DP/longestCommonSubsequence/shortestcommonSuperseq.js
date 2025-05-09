// shortest common supersequence
// a = 'geek'; b = 'eke
// merge it in away make it shortest such that both strings will exist 'geeke', 'geekeke' here 'geeke is the shortest hence ans
// continous zruri nhi order zruri
// a: aggtab , b: gxtxayb , res=aggtgxabtxayb ------------yes
// worst case a + b 
// the common elements are extra they are lcs so if we remove them we will get scsuperseq , count = a+ b - lcs
// table bnake

function lcsuper(str1, str2) {
    const m = str1.length;
    const n = str2.length;
  
    // Base cases
    if (m === 0) return str2;
    if (n === 0) return str1;
  
    // If last characters match
    if (str1[m - 1] === str2[n - 1]) {
      return lcsuper(str1.slice(0, m - 1), str2.slice(0, n - 1)) + str1[m - 1];
    }
  
    // If they don't match, try both options and pick the shorter one
    const option1 = lcsuper(str1.slice(0, m - 1), str2) + str1[m - 1];
    const option2 = lcsuper(str1, str2.slice(0, n - 1)) + str2[n - 1];
  
    return option1.length < option2.length ? option1 : option2;
  }
  
  function lcsuperLength(str1, str2) {
    const lcsLen = lcsLength(str1, str2);
    return str1.length + str2.length - lcsLen;
  }