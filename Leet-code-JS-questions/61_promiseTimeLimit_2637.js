/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  const promiseT = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Time Limit Exceeded");
    }, t);
  });

  return async function (...args) {
    return Promise.race([fn(...args), promiseT]);
  };
};
