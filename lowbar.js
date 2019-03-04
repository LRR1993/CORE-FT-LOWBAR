const _ = {};

_.identity = x => {
  return x;
};

_.take = (arr, n = 1) => {
  return arr.slice(0, n);
};

module.exports = _;
