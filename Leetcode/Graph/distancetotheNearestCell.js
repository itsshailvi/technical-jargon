function updateMatrix(mat) {
    const m = mat.length;
    const n = mat[0].length;

    const queue = [];
    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));

    // Directions: up, down, left, right
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

    // Initialize: Push all 1s into the queue and set their dist = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS from all 1s
    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (let [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 && ny >= 0 &&
                nx < m && ny < n &&
                dist[nx][ny] > dist[x][y] + 1
            ) {
                dist[nx][ny] = dist[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return dist;
}
