const { expect } = require('chai');
const _ = require('../lowbar');

describe('take n elements of array', () => {
  it('returns an empty array', () => {
    expect(_.take([])).to.eql([]);
  });
  it('returns n parts of an array', () => {
    expect(_.take([1, 2, 3, 4, 5], 2)).to.eql([1, 2]);
  });
});
