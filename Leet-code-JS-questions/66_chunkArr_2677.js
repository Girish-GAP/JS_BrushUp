/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let ans = [];
  let cnt = 0;
  let chArr = [];

  for (let i = 0; i < arr.length; i++) {
    chArr.push(arr[i]);
    cnt++;
    if (cnt === size || i === arr.length - 1) {
      ans.push(chArr);
      chArr = [];
      cnt = 0;
    }
  }
  return ans;
};
