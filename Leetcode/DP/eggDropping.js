//recursive 

function eggDropRecursive(eggs, floors) {
    // Base cases
    if (floors === 0 || floors === 1) return floors;
    if (eggs === 1) return floors;
  
    let minAttempts = Infinity;
  
    for (let x = 1; x <= floors; x++) {
      const breaks = eggDropRecursive(eggs - 1, x - 1);     // Egg breaks
      const survives = eggDropRecursive(eggs, floors - x);  // Egg survives
      const attempts = 1 + Math.max(breaks, survives);
  
      minAttempts = Math.min(minAttempts, attempts);
    }
  
    return minAttempts;
  }
  
  // Example:
  console.log(eggDropRecursive(2, 10)); // Output: 4
  