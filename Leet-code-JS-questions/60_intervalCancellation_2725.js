/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args); // first call for 0

  const id = setInterval(() => fn(...args), t);

  return (cancel = () => {
    clearInterval(id);
  });
};
