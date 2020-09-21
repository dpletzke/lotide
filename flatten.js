const flatten = function(arr) {
  arrCopy = [...arr];
  let output = [];
  for(e of arrCopy) {
    if(Array.isArray(e)) {
      output.push(...flatten(e));
    }
    else {
      output.push(e);
    } 
  }
  return output;
}

module.exports = flatten;

// const arr = [1,2,3,4,[[[[9]]]]];
// const noMemberArrays = arr => arr.every(e => !Array.isArray(e));
// console.log(flatten(arr), noMemberArrays(flatten(arr)));

