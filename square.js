// 178 в
exports.square = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            let item = arr[i];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === item * item) {
                    count++;
                }
            }
        }
    }

    return count;
};