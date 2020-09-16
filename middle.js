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


const assertArraysEqual = function(arr1, arr2) {
  let checkEqual = eqArrays(arr1, arr2);
  let output = checkEqual ? `✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}` : `🛑 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`;
  console.log(output);
};

let middleIndexes = function(arr) {
  if (arr.length < 3) {
    return undefined;
  } else if (arr.length % 2 === 0) {
    let midStartIndex = arr.length / 2;
    let midEndIndex = midStartIndex + 1;
    console.log(midStartIndex, midEndIndex);
    return [midStartIndex, midEndIndex];
  } else {
    return Math.floor(arr.length / 2);
  }
};


let middle = function(arr) {
  let midIndexes = middleIndexes(arr);
  console.log(midIndexes);
  if (!midIndexes) {
    return [];
  } else if (Array.isArray(midIndexes)) {
    return [midIndexes[0], midIndexes[1]];
  } else {
    return [arr[midIndexes]];
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
