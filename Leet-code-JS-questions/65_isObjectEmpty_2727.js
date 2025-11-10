/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // console.log(Object.keys(obj)); for {} // [] //
  // check type coercion chain
  return Object.keys(obj).length === 0;
};
