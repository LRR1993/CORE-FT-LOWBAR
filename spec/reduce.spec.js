const { expect } = require('chai');
const _ = require('../lowbar');
const sinon = require('sinon');

describe.only('#reduce', () => {
  it('does not mutate input array', () => {
    const arr = [];
    expect(_.reduce(arr)).to.not.equal(arr);
  });
  it('returns empty with input array', () => {
    expect(_.reduce([])).to.eql([]);
  });
  it('returns returns first element of input array if not func/acc is provided', () => {
    expect(_.reduce(['a', 'b'])).to.eql('a');
  });
});
