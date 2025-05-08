//recursive 


// So yes we are starting from floor 1 but that goes to worst case scenario but we need min number of attempts. So for that DP comes
// so we go to ay number of floor and look for worst case from there and that calculates breaks and survices and 1+ since we did
// 1 attempt there and max cuz and here are seeing worst attempt in 1 particulaer floor but over all we need best in all the worst floor.

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


  //DP
  