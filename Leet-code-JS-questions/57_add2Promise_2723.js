/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const newPromise = new Promise((resolve) => {
    Promise.all([promise1, promise2]).then(([a, b]) => {
      resolve(a + b);
    });
  });

  return newPromise;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
