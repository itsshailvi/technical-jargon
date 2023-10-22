//once function
function once(a, b) {
  let flag = true;
  return function () {
    if (flag) {
      console.log(a + b);
      flag = false;
    }
  };
}

let z = once(2, 3);
z();
z();
z();
