var TimeLimitedCache = function () {
  this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let keyVal = this.map.get(key);
  let ret = false;

  if (keyVal !== undefined) {
    clearTimeout(keyVal.timeId);
    ret = true;
  }

  const timeId = setTimeout(() => {
    this.map.delete(key);
  }, duration);

  this.map.set(key, { timeId, value });

  return ret;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  let keyVal = this.map.get(key);

  return keyVal?.value || -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.map.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
