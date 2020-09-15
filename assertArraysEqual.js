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


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2]));
console.log(assertArraysEqual([1, 2, 'apples'], [1, 2, 'apples']));