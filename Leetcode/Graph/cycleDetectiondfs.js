function hasCycleUndirectedDFS(graph, V) {
    const visited = new Array(V).fill(false);

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (dfs(i, -1, visited, graph)) {
                return true;
            }
        }
    }

    return false;
}

function dfs(node, parent, visited, graph) {
    visited[node] = true;

    for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
            if (dfs(neighbor, node, visited, graph)) {
                return true;
            }
        } else if (neighbor !== parent) {
            // Found a visited neighbor that's not the parent → cycle
            return true;
        }
    }

    return false;
}
