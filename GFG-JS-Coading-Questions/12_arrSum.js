// Write a Program to find a sum of an array using loop :

const sumArr = (arr) => {
  let sum = 0;

  // for(let i = 0; i < arr.length; i++){
  //     sum = sum + arr[i];
  // }

  // OR
  // for(let i of arr){
  //     sum = sum + i;
  // }

  // OR
  //  arr.forEach((item)=> {
  //      sum = sum + item
  //  })

  return sum;
};

const ans = sumArr([1, 2, 3, 4, 5]);

console.log("ans >>> ", ans);
