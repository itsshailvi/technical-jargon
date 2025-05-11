function hasCycleUndirectedBFS(graph, V) {
    const visited = new Array(V).fill(false);

    for (let start = 0; start < V; start++) {
        if (!visited[start]) {
            if (bfs(start, visited, graph)) {
                return true;
            }
        }
    }

    return false;
}

function bfs(start, visited, graph) {
    const queue = [[start, -1]]; // [node, parent]
    visited[start] = true;

    while (queue.length > 0) {
        const [node, parent] = queue.shift();

        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, node]);
            } else if (neighbor !== parent) {
                // Visited and not coming from parent → cycle
                return true;
            }
        }
    }

    return false;
}
