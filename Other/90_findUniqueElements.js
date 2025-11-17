// Return the list of unique elements (which are occured only once) in an array ?

const findUnique = (arr) => {
  let map = new Map();
  let uniqueArr = [];

  for (let item of arr) {
    let value = map.get(item);
    if (value === undefined) {
      map.set(item, 1);
    } else {
      map.set(item, value + 1);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      uniqueArr.push(key);
    }
  }

  return uniqueArr;
};

console.log(findUnique([1, 1, 2, 0, 3, 3, 2, 9])); // [ 0, 9 ]
