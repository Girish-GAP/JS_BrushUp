//  Create an Object From Two Arrays
// Each element in the first array becomes a property name in the object, and the corresponding element in the second array becomes its value.

const objFromTwoArr = (arr1, arr2) => {
  // solution 1 :
  //  let obj = {};
  // arr1.forEach((item, idx)=> {
  //     obj[item] = arr2[idx];
  // })
  // return obj;

  // solution 2 :
  let obj = arr1.reduce((acc, item, idx) => {
    acc[item] = arr2[idx];
    return acc;
  }, {});

  return obj;
};

console.log(objFromTwoArr(["book", "author"], ["nothing", "girish"]));
