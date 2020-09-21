const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const prop in object1) {
    if (Array.isArray(object1[prop])) {
      if (!eqArrays(object1[prop], object2[prop])) {
        return false;
      }
    } else if (object1[prop] !== object2[prop]) {
      return false;
    }
  }
  return true;
};

// const assertObjectsEqual = function(actual, expected) {
//   const inspect = require('util').inspect;
//   let output = eqObjects(actual, expected) ? `✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]` : `🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
//   console.log(output);
// };

// assertObjectsEqual({a: 1}, {a: 1});