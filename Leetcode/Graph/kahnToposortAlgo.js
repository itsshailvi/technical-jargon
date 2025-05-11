function topologicalSort(numNodes, edges) {
    const graph = Array.from({ length: numNodes }, () => []);
    const inDegree = Array(numNodes).fill(0);

    // Build graph and in-degree count
    for (let [u, v] of edges) {
        graph[u].push(v);
        inDegree[v]++;
    }

    const queue = [];
    const topo = [];

    // Push nodes with 0 in-degree
    for (let i = 0; i < numNodes; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
        const node = queue.shift();
        topo.push(node);

        for (let neighbor of graph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return topo.length === numNodes ? topo : []; // return [] if cycle exists
}
