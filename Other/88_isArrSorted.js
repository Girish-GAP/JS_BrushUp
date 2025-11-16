class Solution {
  isSorted(arr) {
    // code here
    let arrSort = [...arr].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arrSort[i]) {
        return false;
      }
    }
    return true;
  }
}

// let arr = [3, 2, 1];
// let j = [...arr];
// console.log(arr === j); // false // WHY ?
