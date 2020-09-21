const tail = require('../tail');
const { assert, expect } = require('chai');

describe('#tail', () => {
  it('should return \'Labs\' when passed ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    expect(tail(arr)).to.match(/Labs/);
  });
  it('should not mutate the array when passed ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const arr = ["Yo Yo", "Lighthouse", "Labs"];
    tail(arr);
    assert.deepEqual(arr, ["Yo Yo", "Lighthouse", "Labs"], "arrays should be equal");

  });
});


