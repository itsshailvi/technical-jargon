var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const reverseGraph = Array.from({ length: n }, () => []);
    const outDegree = Array(n).fill(0);

    // Build reverse graph and count out-degrees
    for (let u = 0; u < n; u++) {
        for (let v of graph[u]) {
            reverseGraph[v].push(u);
        }
        outDegree[u] = graph[u].length;
    }

    // Start with terminal nodes (out-degree 0)
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (outDegree[i] === 0) queue.push(i);
    }

    const safe = Array(n).fill(false);

    while (queue.length > 0) {
        const node = queue.shift();
        safe[node] = true;

        for (let prev of reverseGraph[node]) {
            outDegree[prev]--;
            if (outDegree[prev] === 0) queue.push(prev);
        }
    }

    // Collect all safe nodes
    const result = [];
    for (let i = 0; i < n; i++) {
        if (safe[i]) result.push(i);
    }

    return result;
};
