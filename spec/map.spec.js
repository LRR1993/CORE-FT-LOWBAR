const { expect } = require('chai');

const _ = require('../lowbar');

describe('#map', () => {
  it('does not mutate input array', () => {
    const arr = [];
    expect(_.map(arr)).to.not.equal(arr);
  });
  it('returns empty input array', () => {
    expect(_.map([])).to.eql([]);
  });
  it('maps input array to equivalent output array by default', () => {
    expect(_.map([0])).to.eql([0]);
  });
  it('maps input obj to equivalent output array by default', () => {
    expect(_.map({ a: 0 })).to.eql([0]);
  });
  it('returns multi-element array or object in array form', () => {
    expect(_.map([0, 1])).to.eql([0, 1]);
    expect(_.map({ a: 0, b: 1 })).to.eql([0, 1]);
  });
  it('returns multi-element array or object with function applied to each element', () => {
    const multiplyByTwo = x => x * 2;
    expect(_.map([0, 1], multiplyByTwo)).to.eql([0, 2]);
    expect(_.map({ a: 0, b: 1 }, multiplyByTwo)).to.eql([0, 2]);
  });
});
