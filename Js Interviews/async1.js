//understanding promises
A Promise is in one of the following three states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

We can access the “fulfilled” value of Promise using the “then ()” method, while the “catch ()” method provides the rejected value.

//Example1 of promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 1000);
});

//Example2 of promises
let print3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3");
            resolve();
        },100)
    })

}
let print = async () => {
    console.log("1");
    setTimeout(() => {
        console.log("5");
    }, 200);
    return new Promise(async (resolve,reject)=>{
        console.log("2");
        print3();
        resolve();
        console.log("4");
    })
};
let start=async()=>{
   print();
   console.log("done")
};

start();

output : 
1
2
4
done
3
5
