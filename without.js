const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
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

const without = function(arr, arrToRemove) {
  arr = [...arr];
  for(let i = 0; i < arr.length; i++) {
    if(arrToRemove.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);