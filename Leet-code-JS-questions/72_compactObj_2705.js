/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const isArr = Array.isArray(obj);

  if (isArr) {
    let newArr = [];
    for (let key of obj) {
      let res = compactObject(key);
      if (res) {
        newArr.push(res);
      }
    }
    return newArr;
  }

  let newObj = {};
  for (let key in obj) {
    let res = compactObject(obj[key]);
    if (res) {
      newObj[key] = res;
    }
  }
  return newObj;
};
