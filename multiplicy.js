// 178 б
exports.multiplicity = () => {
  let count = 0;
    for (let i = 0; i < arguments.length; i=i+1) {
      if (arguments[i] % 3 === 0 && arguments[i] % 5 !== 0) {
        count=count+1;
      }
    }
  return count;
};