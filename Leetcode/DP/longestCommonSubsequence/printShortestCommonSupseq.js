// isme lcs me ye diff h lcs me common nikalenge here dono string cover ho jae ese.
// a:ac , b:"" lcs - , scs - ac



function scs(str1, str2) {
    // Base cases
    if (str1.length === 0) return str2;
    if (str2.length === 0) return str1;
  
    // If last characters match
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      return scs(str1.slice(0, -1), str2.slice(0, -1)) + str1[str1.length - 1];
    }
  
    // If last characters don’t match — explore both options
    const option1 = scs(str1.slice(0, -1), str2) + str1[str1.length - 1];
    const option2 = scs(str1, str2.slice(0, -1)) + str2[str2.length - 1];
  
    // Return shorter one
    return option1.length <= option2.length ? option1 : option2;
  }
  