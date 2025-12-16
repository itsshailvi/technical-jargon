
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

  // only adj list 
  function bfs(graph) {
    const visited = new Set();  // To track visited nodes

    // Perform BFS starting from every unvisited node
    for (const startNode in graph) {
        if (!visited.has(startNode)) {
            const queue = [startNode];   // Initialize the queue with the current node
            visited.add(startNode);      // Mark it as visited

            while (queue.length > 0) {
                const node = queue.shift();  // Dequeue a node
                console.log(node);           // Process the node (here, we're printing it)

                // Explore each neighbor of the current node
                for (const neighbor of graph[node]) {
                    if (!visited.has(neighbor)) {  // If the neighbor hasn't been visited
                        visited.add(neighbor);     // Mark it as visited
                        queue.push(neighbor);      // Enqueue the neighbor
                    }
                }
            }
        }
    }
}


  