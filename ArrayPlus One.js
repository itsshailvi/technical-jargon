ncrement(arr,n){
    let temp = arr[0];
if (arr[arr.length - 1] != 9) {
  arr[arr.length - 1] += 1;
} else {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] === 9) {
      arr[i] = 0;
    } else {
      arr[i] += 1;
      break;
    }
  }
}
if (arr[0] !== temp && arr[0] !== temp + 1) {
  arr.unshift(1);
}
return arr
    }
