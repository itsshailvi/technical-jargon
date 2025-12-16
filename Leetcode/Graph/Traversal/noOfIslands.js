var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    
    let count = 0;
  
    // Helper function for DFS traversal
    function dfs(i, j) {
      // Check if the current cell is out of bounds or water
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') {
        return;
      }
      
      // Mark the current land as visited (set to water)
      grid[i][j] = '0';
  
      // Explore the four possible directions (up, down, left, right)
      dfs(i + 1, j); // down
      dfs(i - 1, j); // up
      dfs(i, j + 1); // right
      dfs(i, j - 1); // left
    }
  
    // Loop through the grid
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        // If we find a land cell ('1'), it's a new island
        if (grid[i][j] === '1') {
          count++;
          dfs(i, j); // Perform DFS to mark the entire island as visited
        }
      }
    }
  
    return count;
  };
  