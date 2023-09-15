### Macrotasks vs. Microtasks in JavaScript

In JavaScript, there are two types of tasks: macrotasks and microtasks. These tasks play a crucial role in how code is executed within the event loop.

**Macrotasks**:
- Macrotasks are tasks like mouse events, timers (e.g., `setTimeout`), network operations, and HTML parsing.
- When the event loop starts a new iteration, it processes all the existing macrotasks in the queue before moving on.
- Macrotasks added during the current iteration wait for the next iteration to run.

**Microtasks**:
- Microtasks include tasks such as promise callbacks and DOM mutations.
- They are executed immediately after the current code finishes running, and they continue executing until the microtask queue is empty.
- Even if new microtasks are added during their execution, they are processed before the next macrotask begins.

**The Event Loop Process**:
1. When the call stack is empty, the event loop picks the oldest macrotask from the queue.
2. It runs that macrotask to completion.
3. Then, it processes all available microtasks one after another.
4. This cycle continues: macrotask ➡️ microtasks ➡️ next macrotask.


In a nutshell, macrotasks and microtasks help prioritize and efficiently execute JavaScript code, ensuring responsive web applications.
