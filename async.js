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

output : 
6
6
6
6
6
6
  
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
