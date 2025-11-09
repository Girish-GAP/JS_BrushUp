/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  const newPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });

  return newPromise;
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
