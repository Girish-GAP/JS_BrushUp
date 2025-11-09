/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let redVal = init;

  for (let i = 0; i < nums.length; i++) {
    redVal = fn(redVal, nums[i]);
  }

  return redVal;
};
