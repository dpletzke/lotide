node mlet middleIndexes = function(arr) {
  if (arr.length < 3) {
    return null;
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

module.exports = middle;
