// longest common substring
// need to be continous , discontinous me  length ko wapas se zero krdo
// a: abcde ; b: abfce => ab , c , 

function longestCommonSubstring(str1, str2, m, n, count, result) {
    // Base case: If either string is exhausted, return the result
    if (m === 0 || n === 0) {
        return result;
    }

    // If characters match, increment the count and call the function recursively
    if (str1[m - 1] === str2[n - 1]) {
        count++;
        result = Math.max(result, count);
        return longestCommonSubstring(str1, str2, m - 1, n - 1, count, result);
    } else {
        // If characters don't match, reset count to 0 and move to the next character
        return Math.max(longestCommonSubstring(str1, str2, m - 1, n, 0, result), 
                        longestCommonSubstring(str1, str2, m, n - 1, 0, result));
    }
}

// Example usage
const str1 = "ABCDEF";
const str2 = "ZBCDF";
const result = longestCommonSubstring(str1, str2, str1.length, str2.length, 0, 0);
console.log("Length of longest common substring:", result);
