var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = Array(numCourses).fill(0);

    for (let [a, b] of prerequisites) {
        graph[b].push(a);
        inDegree[a]++;
    }

    const queue = [];
    const order = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    while (queue.length > 0) {
        const course = queue.shift();
        order.push(course);

        for (let next of graph[course]) {
            inDegree[next]--;
            if (inDegree[next] === 0) queue.push(next);
        }
    }

    return order.length === numCourses ? order : [];
};
