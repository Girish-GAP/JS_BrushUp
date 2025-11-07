// Pick element
// Traverse to left array (which is alreay sorted);
// find the place for element while travering swith the elemnt.

const sortArr = (arr) => {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let insertIdx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[insertIdx] > arr[j]) {
        let temp = arr[insertIdx];
        arr[insertIdx] = arr[j];
        arr[j] = temp;
        insertIdx--;
      }
    }
    console.log(arr);
  }
  return arr;
};

const arr = [4, 22, 1, 6, 23, 0];

console.log(sortArr(arr));

// console.log(arr.sort((a, b)=> b-a));
