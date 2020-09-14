// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅ Assertion Passed: [${actual}] === [${expected}]` : `🛑 Assertion Failed: [${actual}] !== [${expected}]`;
  console.log(output);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);