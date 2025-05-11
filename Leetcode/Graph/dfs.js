
// interative
function dfsIterative(start) {
    const stack = [start];
    const visited = new Set();
  
    while (stack.length) {
      const node = stack.pop();
      if (visited.has(node)) continue;
  
      console.log(node);
      visited.add(node);
  
      for (let i = graph[node].length - 1; i >= 0; i--) {
        stack.push(graph[node][i]);
      }
    }
  }
  
  // recursion 
  function dfs(graph) {
    const visited = new Set();
    const traversal = [];  // Array to store the DFS traversal

    function explore(node) {
        if (visited.has(node)) return;
        visited.add(node);
        traversal.push(node); // Add node to traversal array

        for (let neighbor of graph[node]) {
            explore(neighbor);
        }
    }

    // Start DFS from each unvisited node
    for (let node in graph) {
        if (!visited.has(Number(node))) {
            explore(Number(node));
        }
    }

    return traversal;  // Return the traversal list
}
