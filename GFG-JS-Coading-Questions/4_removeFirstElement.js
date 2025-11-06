// How Remove the first element from an array in JavaScript?

const removeFirstFun1 = (arr) => {
  arr.splice(0, 1); // this mutates orignal arr
  return arr; // [2,3,4]
};

const removeFirstFun2 = (arr) => {
  const updatedArr = arr.slice(1); // this not mutates orignal arr
  return updatedArr; // [2,3,4]
};

console.log(removeFirstFun1([1, 2, 3, 4]));
console.log(removeFirstFun2([1, 2, 3, 4]));
