const { expect } = require('chai');
const sinon = require('sinon');
const _ = require('../lowbar');

describe('#forEach', () => {
  it('does not mutate input array', () => {
    const arr = [];
    expect(_.forEach(arr)).to.not.equal(arr);
  });
  it('pushes expected values into new array when required', () => {
    const inArr = [0, 1];
    const outArr = [];
    const psh = x => {
      outArr.push(x);
    };
    _.forEach(inArr, psh);
    expect(inArr).to.eql(outArr);
  });
  it('iterate over values and keys of array/object and use function', () => {
    const inObj = { a: 0, b: 1 };
    const outArr = [];
    const pushKeyVal = (v, k) => {
      outArr.push(`${k}${v}`);
    };
    _.forEach(inObj, pushKeyVal);
    expect(outArr).to.eql(['a0', 'b1']);
  });
  it('iterates as expected when no function (a spy) is input', () => {
    const forEachSpy = sinon.spy();
    _.forEach([1, 2, 3], forEachSpy);
    expect(forEachSpy.args).to.eql([[1, '0'], [2, '1'], [3, '2']]);
  });
});
