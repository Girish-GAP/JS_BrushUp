/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  // const arr = [...args];
  // return arr.length;

  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
