//str- a ---------convert---------- str- by insert or delete 
// heap , pea -------p insert pheap , hp delete
//  ea is lcs , a ---> lcs -----> b hence heap ---h, p deletion-> ea ----p insertion-> pea 
// #deletion = a length - lcs
// #insertion = b length - lcs

function lcsLength(a, b) {
    // Base case
    if (a.length === 0 || b.length === 0) return 0;
  
    // If last characters match
    if (a[a.length - 1] === b[b.length - 1]) {
      return 1 + lcsLength(a.slice(0, -1), b.slice(0, -1));
    }
  
    // If not matching, try both options
    const option1 = lcsLength(a.slice(0, -1), b);
    const option2 = lcsLength(a, b.slice(0, -1));
  
    return Math.max(option1, option2);
  }
  
  function minInsertDelete(a, b) {
    const lcs = lcsLength(a, b);
    const deletions = a.length - lcs;
    const insertions = b.length - lcs;
  
    return { insertions, deletions, total: insertions + deletions };
  }
  