const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// const ans = arr1 + arr2; // WRONG // 1,2,3,4,57,8,9,10 // The + operator converts arrays to strings before concatenation
let ans = [...arr1, ...arr2]; // BEST METHOD
let ans2 = arr1.concat(arr2);

console.log(ans);
