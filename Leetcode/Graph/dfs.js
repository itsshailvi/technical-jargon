
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