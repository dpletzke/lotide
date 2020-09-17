const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr)
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
} 


const assertArraysEqual = function(arr1, arr2) {
  let checkEqual = eqArrays(arr1, arr2);
  let output = checkEqual ? `✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}` : `🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`;
  console.log(output);
}

const flatten = function(arr) {
  arr = [...arr];
  let output = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i])) {
      for(let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    }
    else {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(flatten([1,2,6,7,8,[9]]));