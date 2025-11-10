/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
