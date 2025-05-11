// only for directed acyclic graph
function topoSortDFS(numNodes, edges) {
    const graph = Array.from({ length: numNodes }, () => []);
    const visited = Array(numNodes).fill(false);
    const stack = [];

    for (let [u, v] of edges) {
        graph[u].push(v);
    }

    function dfs(node) {
        visited[node] = true;

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) dfs(neighbor);
        }

        stack.push(node); // post-order
    }

    for (let i = 0; i < numNodes; i++) {
        if (!visited[i]) dfs(i);
    }

    return stack.reverse();
}
