const { expect } = require('chai');

const _ = require('../lowbar');

describe('#uniq', () => {
  it('returns duplicate free input array', () => {
    expect(_.uniq([])).to.eql([]);
    expect(_.uniq([1])).to.eql([1]);
    expect(_.uniq([1, 1])).to.eql([1]);
    expect(_.uniq([1, 2, 1])).to.eql([1, 2]);
    expect(_.uniq([1, 2, 1, 3, 4, 2, 5, 7, 7, 1])).to.eql([1, 2, 3, 4, 5, 7]);
  });
});