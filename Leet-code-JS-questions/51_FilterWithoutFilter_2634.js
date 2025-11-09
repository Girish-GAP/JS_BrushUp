/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let ret = fn(arr[i], i);
    if (ret) {
      ans.push(arr[i]);
    }
  }
  return ans;
};
