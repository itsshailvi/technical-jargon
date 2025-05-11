var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dfs = (i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return;
        grid[i][j] = 0; // Mark as visited water
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };

    // 1. Remove land connected to boundary
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) dfs(i, 0);
        if (grid[i][n - 1] === 1) dfs(i, n - 1);
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 1) dfs(0, j);
        if (grid[m - 1][j] === 1) dfs(m - 1, j);
    }

    // 2. Count remaining land cells
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) count++;
        }
    }

    return count;
};
