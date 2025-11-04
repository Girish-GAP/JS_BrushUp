const findLargestNum = (num) => {
  let max = -1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
};

const findMaxNum = (num) => {
  return Math.max(...num); // ... because .max expects indivisuals nums not array
};

console.log(findLargestNum([2, 11, 4, 1])); // 11
console.log(findMaxNum([2, 11, 4, 1])); // 11
