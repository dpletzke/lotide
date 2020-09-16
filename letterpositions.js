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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.replace(' ', '');
  for (let i = 0; i < sentence.length; i++) {
    let c = sentence[i];
    if (results[c]) {
      results[c].push(i);
    } else {
      results[c] = [i];
    }
  }
  return results;
};

console.log(letterPositions('abcabc'));