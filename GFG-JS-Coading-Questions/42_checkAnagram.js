// Check if Two Strings are Anagrams or not in JavaScript?
// a word or phrase that is made by arranging the letters of another word or phrase in a different order.
// count of each char should be same in both strings.

const checkAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    let countOfKey = 0;

    countOfKey = map1.get(str1[i]) || 0;
    map1.set(str1[i], countOfKey + 1);

    countOfKey = map2.get(str2[i]) || 0;
    map2.set(str2[i], countOfKey + 1);
  }

  for (let [key, val] of map1) {
    const cnt = map2.get(key);
    if (cnt !== val) {
      return false;
    }
  }

  return true;
};

const checkAnagramsOptimize = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = new Map();

  for (let char of str2) {
    let countOfKey = map1.get(char) || 0;
    map1.set(char, countOfKey + 1);
  }

  for (let char of str2) {
    // check if str2 all char present in str1
    if (!map1.has(char)) {
      return false;
    }

    let countOfKey = map1.get(char) || 0;
    map1.set(char, countOfKey - 1);
  }

  for (let [key, val] of map1) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
};

// console.log(checkAnagrams("listen", "silens"))
console.log(checkAnagramsOptimize("listen", "silent"));
