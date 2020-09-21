const middle = require('../middle');
const { assert, expect } = require('chai');

describe('#middle', () => {
  it('should return an empty array when passed an array with a single element', () => {
    const arr = [1];
    expect(middle(arr)).to.be.an('array').that.is.empty;
  });
  it('should return an empty array when passed an array with two elements', () => {
    const arr = [1, 2];
    expect(middle(arr)).to.be.an('array').that.is.empty;
  });
});

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);