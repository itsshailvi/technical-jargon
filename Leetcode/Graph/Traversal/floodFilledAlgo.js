var floodFill = function(image, sr, sc, newColor) {
    // Get the starting color
    const startColor = image[sr][sc];

    // If the start color is the same as the new color, no need to change anything
    if (startColor === newColor) return image;

    // Helper function for DFS
    function dfs(i, j) {
        // If out of bounds or the current color is not the start color, stop the recursion
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== startColor) {
            return;
        }

        // Change the current pixel's color to the new color
        image[i][j] = newColor;

        // Recursively fill in the 4 directions (up, down, left, right)
        dfs(i + 1, j); // down
        dfs(i - 1, j); // up
        dfs(i, j + 1); // right
        dfs(i, j - 1); // left
    }

    // Start the DFS from the given pixel
    dfs(sr, sc);

    return image;
};
