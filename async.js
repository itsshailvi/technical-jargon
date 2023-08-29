//settimeout and a function
let a = 5;
let b = 10;
console.log('Me first');

setTimeout(() => {
  console.log('print after 1ms', a,b);
},1000);

console.log("Multiply =", a*b);

output : 
Me first
Multiply = 50
// after 1ms time delay
a = 5
b = 10


//settimeout with loop
(var)
for(let i=0; i<=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//with var
output : 
6
6
6
6
6
6

//with let
(let)
for(let i=0; i<=5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
output : 
0
1
2
3
4
5


//settimeout nested 
console.log('outside setTimeout1');
setTimeout(() => {
  console.log('inside parent1 setTimeout1');
  setTimeout(() => {
    console.log('inside parent2 setTimeout1');
    setTimeout(() => {
      console.log('inside child setTimeout');
    }, 3000);
    console.log('inside parent2 setTimeout2');
  }, 2000);
  console.log('inside parent1 setTimeout2');
}, 1000);
console.log('outside setTimeout2');

output :
outside setTimeout1 
// blocking statement execute first outside setTimeout2 
// blocking statement execute first inside parent1 setTimeout1 
// after 1000ms blocking statement inside parent1 scope inside parent1 setTimeout2 
// after 1000ms blocking statement inside parent1 scope inside parent2 setTimeout1 
// after 2000ms blocking statement inside parent2 scope inside parent2 setTimeout2 
// after 2000ms blocking statement inside parent2 scope inside child setTimeout 
// after 3000ms blocking statement inside child scope


//Blocking and unblocking statements 
“Blocking” statements prevent the next statement from running until its execution finishes. 
Functions like setTimeout(), setInterval(), promises, network calls, events, and all other 
asynchronous calls are non-blocking statements.

let nums = [1,2,3];
console.log("Blocking statement 1");
setTimeout(() => {
  console.log(nums.length);
  console.log("non-blocking");
},1000)
nums.forEach((num) => {
  console.log(num);
});
setTimeout(() => {
  console.log("after 0 secs");
}, 0);
console.log("blocking");

output :
Blocking statement 1
1
2
3
blocking
after 0 secs
3
non-blocking
