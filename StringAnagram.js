function isAnagram(one, two) {
  //both words in small case
  let a = one.toLowerCase();
  let b = two.toLowerCase();
  //check length 
  if(a !== b)return false
  //forming an array with each word 
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

