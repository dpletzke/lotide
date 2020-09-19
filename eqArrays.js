// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅ Assertion Passed: [${actual}] === [${expected}]` : `🛑 Assertion Failed: [${actual}] !== [${expected}]`;
  console.log(output);
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i])) {
      if(!eqArrays(arr1[i], arr2[i]))
      return false;
    }
    else if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
} 


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);