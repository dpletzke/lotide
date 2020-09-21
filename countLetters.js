// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   let output = actual === expected ? `✅ Assertion Passed: [${actual}] === [${expected}]` : `🛑 Assertion Failed: [${actual}] !== [${expected}]`;
//   console.log(output);
// };

let countLetters = function(str) {
  const results = {};
  for (const c of str) {
    if (results[c]) {
      results[c] ++;
    } else {
      results[c] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

// console.log(countLetters('abba'));
// console.log(countLetters('rodeo'));
// assertEqual(countLetters('abba'), {a: 2, b: 2});
// assertEqual(countLetters('rodeo'), {a: 2, b: 2});