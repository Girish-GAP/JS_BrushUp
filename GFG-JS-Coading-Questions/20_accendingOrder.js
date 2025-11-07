const sortAccWithSort = () => {
  return arr.sort((a, b) => a - b);
};

// Insertion sort
// Pick → Compare Left → Swap Left Until Sorted
const sortAccMethod = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[idx] < arr[j]) {
        let temp = arr[idx];
        arr[idx] = arr[j];
        arr[j] = temp;
        idx--;
      }
    }
  }
  return arr;
};

const arr = [11, 2, 0, 23, 4, 1];

console.log(sortAccMethod(arr));

// console.log(sortWithSort([arr]));
