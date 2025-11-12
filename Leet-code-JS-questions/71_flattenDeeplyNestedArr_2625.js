/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  let ans = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      ans.push(...flat(item, n - 1));
    } else {
      ans.push(item);
    }
  }

  return ans;
};
