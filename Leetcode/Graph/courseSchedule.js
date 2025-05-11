var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);

    // Build graph and compute in-degree
    for (let [a, b] of prerequisites) {
        graph[b].push(a);
        inDegree[a]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let count = 0;

    while (queue.length > 0) {
        const course = queue.shift();
        count++;

        for (let next of graph[course]) {
            inDegree[next]--;
            if (inDegree[next] === 0) queue.push(next);
        }
    }

    return count === numCourses;
};
