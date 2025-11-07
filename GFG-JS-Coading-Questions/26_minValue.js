// Write a Program to find the minimum value in an array in JavaScript?

const getMin = (arr) => {
  // return Math.min(...arr);

  let min = arr[0];

  for (let value of arr) {
    if (min > value) {
      min = value;
    }
  }

  return min;
};

console.log(getMin([5, 10, -1, 8]));
