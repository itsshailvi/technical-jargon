//2 arrays 1 for visit , one for path visit



function hasCycleDirected(graph) {
    const n = graph.length;
    const visited = Array(n).fill(false);
    const recStack = Array(n).fill(false); // recursion stack

    function dfs(node) {
        if (recStack[node]) return true;     // back edge found → cycle
        if (visited[node]) return false;     // already processed

        visited[node] = true;
        recStack[node] = true;

        for (let neighbor of graph[node]) {
            if (dfs(neighbor)) return true;
        }

        recStack[node] = false; // backtrack
        return false;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            if (dfs(i)) return true;
        }
    }

    return false;
}
