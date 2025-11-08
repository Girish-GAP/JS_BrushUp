// Find the maximum difference between two numbers in an array in JavaScript?
// Find out max no.and min no. return there differance.

const getMaxDiff = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return max - min;
};

console.log(getMaxDiff([1, 2, 90, 10, 110]));
