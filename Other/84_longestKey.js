// Given is an object obj return the value of the longest key of object.

// getLongestKeysValue
const getLongestKeysValue = (obj) => {
  let longKey = "";
  for (let key in obj) {
    if (key.length > longKey.length) {
      longKey = key;
    }
  }
  return obj[longKey];
};

console.log(getLongestKeysValue({ name: "dirt", category: "alpha" }));
