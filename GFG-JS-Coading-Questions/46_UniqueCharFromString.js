// Get Unique Characters from a String in JavaScript?

const getUniqueChar = (str) => {
  const ans = [];

  for (let char of str) {
    if (!ans.includes(char)) {
      ans.push(char);
    }
  }

  return ans.join("");
};

console.log(getUniqueChar("geeksforgeeks"));
