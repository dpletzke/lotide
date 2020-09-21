
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

module.exports = letterPositions;

// console.log(letterPositions('abcabc'));