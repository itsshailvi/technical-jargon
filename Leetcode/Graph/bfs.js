
function bfs(start) {
    const queue = [start];         // Start with A in a line (queue)
    const visited = new Set();     // Keep track of who we’ve already hugged
  
    while (queue.length > 0) {
      const current = queue.shift(); // Take the first friend from the line
  
      if (visited.has(current)) {
        continue; // Already said hello to this friend
      }
  
      console.log(current); // Say hello to this friend
      visited.add(current); // Mark this friend as visited
  
      // Ask all this friend’s friends to get in line
      for (const neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
  }
  
  bfs('A');
  