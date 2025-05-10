// evaluate exprn to True boolean paranthesis
//  operations:  |  & ^
//  xor : 0 , 0 -> 1, 1 -> 0;         1, 0 -> 0,1 --> 1


function countWays(expression, i, j, isTrue) {
    // Base case: If the expression is a single character (either 'T' or 'F')
    if (i === j) {
      if (isTrue) {
        return expression[i] === 'T' ? 1 : 0;  // We want True
      } else {
        return expression[i] === 'F' ? 1 : 0;  // We want False
      }
    }
  
    let ways = 0;
  
    // Loop through all the operators in the expression
    for (let k = i + 1; k < j; k += 2) {
      let operator = expression[k];
  
      // Recursively calculate the number of ways for the left and right sides
      let leftTrue = countWays(expression, i, k - 1, true);
      let leftFalse = countWays(expression, i, k - 1, false);
      let rightTrue = countWays(expression, k + 1, j, true);
      let rightFalse = countWays(expression, k + 1, j, false);
  
      // Combine the results based on the operator
      if (operator === '&') {
        if (isTrue) {
          ways += leftTrue * rightTrue;  // True if both sides are True
        } else {
          ways += leftTrue * rightFalse + leftFalse * rightTrue + leftFalse * rightFalse;
        }
      } else if (operator === '|') {
        if (isTrue) {
          ways += leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;  // True if at least one side is True
        } else {
          ways += leftFalse * rightFalse;  // False only if both sides are False
        }
      } else if (operator === '^') {
        if (isTrue) {
          ways += leftTrue * rightFalse + leftFalse * rightTrue;  // True if sides are different
        } else {
          ways += leftTrue * rightTrue + leftFalse * rightFalse;  // False if sides are the same
        }
      }
    }
  
    return ways;
  }
  
  function evaluateExpression(expression) {
    return countWays(expression, 0, expression.length - 1, true);
  }
  
  // Example usage
  const expression = "T|F&T^F";
  const result = evaluateExpression(expression);
  console.log(result);  // Output: 4
  