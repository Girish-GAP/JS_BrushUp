const findInterSection2 = (arr1, arr2) => {
  const ans = arr1.filter((item) => arr2.includes(item));

  return ans;
};

// Best method
// Time complxity : average : O(n + m)
const findInterSections = (arr1, arr2) => {
  const set1 = new Set(arr1); //O(1) for one for n elements O(n)
  const set2 = new Set(arr2); // O(m)
  const ans = [];

  for (let value of set1) {
    if (set2.has(value)) {
      // for one O(1) : O(n)
      ans.push(value); // for one O(1) : O(n)
    }
  }

  return ans;
};

// console.log(findInterSections([5,6,7,8], [3,4,5,6]));
console.log(findInterSection2([5, 6, 7, 8], [3, 4, 5, 6]));
