// Write a Program to reverse an array in JavaScript?

const reverseArr = (arr) => {
  for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // return arr;
};

const arr = [1, 2, 3, 4, 5, 6];
reverseArr(arr); // Same array reverse;
console.log(arr); // 5 4 3 2 1

const reverseCloneArr = (arr) => {
  const arrRev = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrRev.push(arr[i]);
  }

  return arrRev;
};

console.log(reverseCloneArr([1, 2, 3, 4, 5, 6]));
