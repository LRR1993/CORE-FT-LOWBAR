const _ = {};

_.identity = x => {
  return x;
};

_.take = (arr, n = 1) => {
  return arr.slice(0, n);
};

_.uniq = arr => {
  return [...new Set(arr)];
};

_.map = (obj, func = _.identity) => {
  const outArr = [];
  for (let prop in obj) {
    outArr.push(func(obj[prop]));
  }
  return outArr;
};

_.forEach = (obj, func = _.identity) => {
  for (let prop in obj) {
    func(obj[prop], prop);
  }
};

_.filter = (obj, pred = _.identity) => {
  const outArr = [];
  for (let prop in obj) {
    if (pred(obj[prop])) {
      outArr.push(obj[prop]);
    }
  }
  return outArr;
};

module.exports = _;
