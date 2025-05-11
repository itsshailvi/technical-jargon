// To check whether a graph is bipartite using BFS, the idea is to try to color the graph with two colors 
// such that no two adjacent nodes have the same color. If you succeed, the graph is bipartite; otherwise, it's not.
// linears - bipartite
// odd length cyclic non bipartite

var isBipartite = function(graph) {
    const n = graph.length;
    const color = Array(n).fill(-1); // -1 = uncolored

    for (let i = 0; i < n; i++) {
        if (color[i] !== -1) continue;

        const queue = [i];
        color[i] = 0;

        while (queue.length > 0) {
            const node = queue.shift();

            for (let neighbor of graph[node]) {
                if (color[neighbor] === -1) {
                    color[neighbor] = 1 - color[node]; // alternate color
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return false; // same color neighbor → not bipartite
                }
            }
        }
    }

    return true;
};

