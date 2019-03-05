const { expect } = require('chai');
const sinon = require('sinon');
const _ = require('../lowbar');

describe('#filter', () => {
  it('does not mutate input array', () => {
    const arr = [];
    expect(_.filter(arr)).to.not.equal(arr);
  });
  it('returns empty input array', () => {
    expect(_.filter([])).to.eql([]);
  });
  it('returns new array if predicate is truthy', () => {
    const pred = () => {
      return true;
    };
    expect(_.filter([1], pred)).to.eql([1]);
    expect(_.filter({ a: 1 }, pred)).to.eql([1]);
  });
  it('returns new empty array if predicate is falsy', () => {
    const pred = () => {
      return false;
    };
    expect(_.filter([1], pred)).to.eql([]);
    expect(_.filter({ a: 1 }, pred)).to.eql([]);
  });
  it('returns new array of values for which predicate is true', () => {
    const pred = x => {
      return x < 3;
    };
    expect(_.filter([1, 2, 3, 4, 5], pred)).to.eql([1, 2]);
    expect(_.filter({ a: 1, b: 2, c: 3, d: 4, e: 5 }, pred)).to.eql([1, 2]);
  });
  it('iterates as expected through collection', () => {
    const pred = x => {
      return x < 3;
    };
    const filterSpy = sinon.spy(pred);
    expect(_.filter([1, 2, 3, 4, 5], filterSpy)).to.eql([1, 2]);
    expect(filterSpy.args).to.eql([[1], [2], [3], [4], [5]]);
    expect(filterSpy.callCount).to.eql(5);
  });
});
