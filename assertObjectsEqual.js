const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = eqObjects(actual, expected) ? `✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]` : `🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
  console.log(output);
};

// assertObjectsEqual({a: 1}, {a: 1});

module.exports = assertObjectsEqual;