/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const map = new Map();
  let ans = [];

  for (let item of arr1) {
    map.set(item.id, item);
  }

  for (let item of arr2) {
    // 1 check if value exist or not
    let value1 = map.get(item.id);
    if (value1 === undefined) {
      ans.push(item);
    } else {
      ans.push({ ...value1, ...item });
      map.delete(item.id);
    }
  }

  for (let [key, val] of map) {
    ans.push(val);
  }

  return ans.sort((a, b) => a.id - b.id);

  /*
  function join(arr1, arr2, key = "id") {
    const map = new Map(arr1.map((obj) => [obj[key], obj]));
    const merged = [];

    for (const obj of arr2) {
      const base = map.get(obj[key]);
      merged.push(base ? { ...base, ...obj } : obj);
      map.delete(obj[key]);
    }

    for (const obj of map.values()) merged.push(obj);

    return merged.sort((a, b) => a[key] - b[key]);
  }
  */
};
