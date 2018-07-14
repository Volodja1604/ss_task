exports.piphagorTrinity = (n) => {
  const arrTrinity = [];
  let i = 0;
  for (let c = 1; c <= n; c+=c) {
    for (let b = 1; b <= n; b+=b) {
      for (let a = 1; a <= n; a+=a) {
        if (c * c === b * b + a * a) {
          arrTrinity[i] = ({ a: a, b: b, c: c });
            i++;
        }
      }
    }
  }
  return arrTrinity;
};
