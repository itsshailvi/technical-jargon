var numDistinctIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const shapes = new Set();

    const dfs = (i, j, dir, path) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return;
        grid[i][j] = 0; // mark visited
        path.push(dir);

        dfs(i + 1, j, 'D', path);
        dfs(i - 1, j, 'U', path);
        dfs(i, j + 1, 'R', path);
        dfs(i, j - 1, 'L', path);

        path.push('B'); // backtrack marker
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const path = [];
                dfs(i, j, 'S', path); // 'S' = start
                shapes.add(path.join(''));
            }
        }
    }

    return shapes.size;
};
