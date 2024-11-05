function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

//A closure is the combination of a function and the lexical environment 
within which that function was declared. This environment consists of any local variables that 
were in-scope at the time the closure was created 
The instance of displayName maintains a reference to its lexical environment,
within which the variable name exists. For this reason, when myFunc is invoked,
the variable name remains available for use, and "Mozilla" is passed to console.log.
