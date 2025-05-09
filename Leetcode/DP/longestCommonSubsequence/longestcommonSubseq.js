// longest common subsequence 
// sunsequence maynot be continous , but substring is 
// e.g., x = [abcdgh]; y = [abedfhr]
// subseq : abdh  substring: ab
// string size = 0 valid,
// let x : [abcdgh] y: [abedfh] last check 'h' exists , x-1, y-1; if not x-1 y || y-1, x
// need to check else block if we can directly make it zero

// recursive
function lcs(str1, str2, m, n) {
    // Base case: If either string is empty, return 0
    if (m === 0 || n === 0) {
        return 0;
    }

    // If the last characters of both strings are the same
    if (str1[m - 1] === str2[n - 1]) {
        return 1 + lcs(str1, str2, m - 1, n - 1); // Include this character in LCS
    } else {
        // Otherwise, find the maximum of excluding the current character from either str1 or str2
        return Math.max(lcs(str1, str2, m - 1, n), lcs(str1, str2, m, n - 1));
    }
}