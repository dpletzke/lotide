const without = function(arr, arrToRemove) {
  arr = [...arr];
  for(let i = 0; i < arr.length; i++) {
    if(arrToRemove.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);