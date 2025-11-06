//adds numbers in the array, together using the reduce mehtod

const arr = [1, 2, 3, 4, 5];

const add = arr.reduce((a, b, c, d) => {
  console.log(a, b, c, d);
  return a + b;
}, 0);

console.log("add ", add);

// output :
// //0 1 0 [ 1, 2, 3, 4, 5 ]
// 1 2 1 [ 1, 2, 3, 4, 5 ]
// 3 3 2 [ 1, 2, 3, 4, 5 ]
// 6 4 3 [ 1, 2, 3, 4, 5 ]
// 10 5 4 [ 1, 2, 3, 4, 5 ]
// add  15
