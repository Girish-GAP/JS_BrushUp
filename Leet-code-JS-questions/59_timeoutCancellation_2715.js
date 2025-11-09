/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const id = setTimeout(() => {
    return fn(...args);
  }, t);

  const cancel = () => {
    clearTimeout(id);
  };

  return cancel;
};
