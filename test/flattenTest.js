const flatten = require('../flatten');
const { expect, assert } = require('chai');

describe('#flatten', () => {
  it('should return a flat array when passed a nested array', () => {
    const noMemberArrays = arr => arr.every(e => !Array.isArray(e));
    const arr = [1,2,3,4,5,[6,[[[[7]]],8]]];
    expect(flatten(arr)).is.an('array').that.satisfies(noMemberArrays);
  });
  it('should return all of the same elements that were in the passed array', () => {
    const arr = [2,3,5,6,7,12,0];
    expect(flatten(arr)).is.an('array').that.has.members(arr);
  });
});