const { expect } = require('chai');
const sinon = require('sinon');
const _ = require('../lowbar');

describe.only('#forEach', () => {
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

  it('iterates as expected when no function is input', () => {
    const inObj = { a: 0, b: 1 };
    const inArr = [0, 1];
    // const spyOnObj = {
    //   function1: _.forEach,
    //   function2: _.identity
    // };
    const forEachSpy = sinon.spy();
    console.log(forEachSpy.args);
    _.forEach([1, 2, 3], forEachSpy);
    console.log(forEachSpy.args);

    // const identitySpy = sinon.spy(spyOnObj, 'function2');
    // console.log(`forEach callCount: ${forEachSpy.callCount}`);
    // console.log(`identity callCount: ${identitySpy.callCount}`);
    // spyOnObj.function1(inObj);
    // console.log(`forEach callCount: ${forEachSpy.callCount}`);
    // console.log(`identity callCount: ${identitySpy.callCount}`);
    // spyOnObj.function1(inArr);
    // console.log(`forEach callCount: ${forEachSpy.callCount}`);
    // console.log(`identity callCount: ${identitySpy.callCount}`);
  });
});
