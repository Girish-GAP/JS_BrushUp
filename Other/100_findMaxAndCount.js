// Get the maximum value from a numbers array along with its count

let findMaxAndCount = (arr) => {
  let max = arr[0];
  let cnt = 0;

  for (let item of arr) {
    if (item > max) {
      max = item;
    }
  }

  for (let item of arr) {
    if (max === item) {
      cnt++;
    }
  }

  return { max: max, count: cnt };
};

console.log(findMaxAndCount([1, 2, 3, 4, 10, 10, 5, 10, 11, 11]));
