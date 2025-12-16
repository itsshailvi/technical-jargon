var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinces = 0;

    // Helper function for DFS
    const dfs = (i) => {
        visited[i] = true;
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    };

    // Iterate through each city and run DFS if not visited
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            provinces++;  // We found a new connected component
        }
    }

    return provinces;
};
