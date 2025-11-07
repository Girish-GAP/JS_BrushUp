// Find the Union of Two Arrays in JavaScript

//The union of arrays is a new array containing all unique elements from two or more original arrays

const getUnionOfArrMySolution = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const ans = [...arr1];

  for (let value of set2) {
    if (!set1.has(value)) {
      ans.push(value);
    }
  }

  return ans;
};

const getUnionOfArr = (arr1, arr2) => {
  const set1 = new Set([...arr1, ...arr2]);

  return [...set1];
};

console.log(getUnionOfArr([1, 2, 3], [4, 2, 3, 4]));
