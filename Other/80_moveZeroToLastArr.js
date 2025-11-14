// Move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
// input : arr[] = [10, 0, 5, 20, 0, 12, 0]
// outuput : [10, 5, 20, 12, 0, 0, 0]

const removeZeros = (arr) => {
  let s = 0; // slow pointer
  let slowFreeze = false;

  for (let i = 0; i < arr.length; i++) {
    // console.log('\nslow pointer > ', s ," va ", arr[s]);
    // console.log('fast pointer > ', i ," va ", arr[i]);
    if (arr[i] === 0 && !slowFreeze) {
      s = i;
      slowFreeze = true;
    }

    if (arr[i] !== 0 && s < i) {
      // console.log('swap > ', arr);
      let temp = arr[i];
      arr[i] = arr[s];
      arr[s] = temp;
      s++;
    }
  }
  // console.log(arr);
  return arr;
};

console.log(removeZeros([10, 0, 5, 20, 0, 12, 0]));
console.log(removeZeros([0, 1, 0, 3, 12]));

// Optmized solution :
/*
const removeZeros = (arr) => {
  let s = 0; // next non-zero position

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[s] = arr[i];
      s++;
    }
  }

  // fill remaining with zeros
  while (s < arr.length) {
    arr[s] = 0;
    s++;
  }

  return arr;
};

console.log(removeZeros([10, 0, 5, 20, 0, 12, 0])); // [10,5,20,12,0,0,0]
console.log(removeZeros([0, 1, 0, 3, 12])); // [1,3,12,0,0]

*/
