/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const map = new Map();

  return function (...args) {
    let key = JSON.stringify(args);
    let value = map.get(key);
    if (value !== undefined) {
      return value;
    } else {
      let ret = fn(...args);
      map.set(key, ret);
      return ret;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
