var alienOrder = function(words) {
    const graph = {};
    const inDegree = {};

    // Step 1: Initialize graph and indegree
    for (let word of words) {
        for (let char of word) {
            graph[char] = new Set();
            inDegree[char] = 0;
        }
    }

    // Step 2: Build edges based on first differing characters
    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];

        if (w1.length > w2.length && w1.startsWith(w2)) {
            return ""; // Invalid case (prefix issue)
        }

        for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
            if (w1[j] !== w2[j]) {
                if (!graph[w1[j]].has(w2[j])) {
                    graph[w1[j]].add(w2[j]);
                    inDegree[w2[j]]++;
                }
                break;
            }
        }
    }

    // Step 3: Topological Sort using BFS (Kahn's algorithm)
    const queue = [];
    for (let char in inDegree) {
        if (inDegree[char] === 0) queue.push(char);
    }

    let order = "";
    while (queue.length > 0) {
        const char = queue.shift();
        order += char;

        for (let neighbor of graph[char]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    return order.length === Object.keys(graph).length ? order : "";
};
