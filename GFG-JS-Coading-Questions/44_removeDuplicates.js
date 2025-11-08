// Remove Duplicates from an Array in JavaScript?

const removeDuplicate = (arr) => {
  const set = new Set(arr);

  return [...set];
};

const removeDuplicate2 = (arr) => {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (!ans.includes(arr[i])) {
      ans.push(arr[i]);
    }
  }

  return ans;
};

console.log(removeDuplicate2([5, 2, 5, 6, 6, 7]));
