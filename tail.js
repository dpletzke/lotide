// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let output = actual === expected ? `✅ Assertion Passed: [${actual}] === [${expected}]` : `🛑 Assertion Failed: [${actual}] !== [${expected}]`;
  console.log(output);
};

const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.slice(1);
};


assertEqual(tail([]), undefined);
assertEqual(JSON.stringify(tail([5,6,7])), JSON.stringify([6,7]));
assertEqual(JSON.stringify(tail(["Hello", "Lighthouse", "Labs"])), JSON.stringify(["Lighthouse", "Labs"]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!