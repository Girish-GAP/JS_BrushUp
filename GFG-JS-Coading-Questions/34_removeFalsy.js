// Remove falsy Values from an array in JavaScript?
// falsy means ? in boolean condition which comes as false

const removeFalsy = (arr) => {
  const ans = arr.filter((value) => (value ? true : false));

  return ans;
};

console.log(removeFalsy([0, 5, false, 6, "", 7])); // [5, 6, 7]
