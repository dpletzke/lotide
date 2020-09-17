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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length - 1]);
const results3 = map(words, word => word.split('').slice(0, 2).reverse().join(''));
const results4 = map(words, word => word[0] + '!');


assertArraysEqual(results1, ['g' ,'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['d' ,'l', 'o', 'r', 'm' ]);
assertArraysEqual(results3, ['rg' ,'oc', 'ot', 'am', 'ot' ]);
assertArraysEqual(results4, ['g!' ,'c!', 't!', 'm!', 't!' ]);