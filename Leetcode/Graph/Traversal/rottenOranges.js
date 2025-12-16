var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Queue for BFS and count of fresh oranges
    let queue = [];
    let freshCount = 0;

    // Initialize the queue with all rotten oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    // If there are no fresh oranges, return 0
    if (freshCount === 0) return 0;

    // Directions array to go up, down, left, right
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let minutes = 0;

    // BFS loop
    while (queue.length > 0) {
        let size = queue.length;
        let rotCount = 0;

        // Process all rotten oranges at the current level (minute)
        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift();

            // Explore all 4 directions
            for (let [dx, dy] of directions) {
                let newX = x + dx, newY = y + dy;

                // If the new position is within bounds and is a fresh orange
                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2; // Rotten this orange
                    queue.push([newX, newY]); // Add to queue for next BFS level
                    freshCount--; // Decrease fresh count
                    rotCount++; // A new rotten orange is added
                }
            }
        }

        // If rotCount > 0, that means one level of BFS (minute) has passed
        if (rotCount > 0) {
            minutes++;
        }
    }

    // If there are still fresh oranges left, return -1 (impossible to rot all)
    return freshCount === 0 ? minutes : -1;
};
