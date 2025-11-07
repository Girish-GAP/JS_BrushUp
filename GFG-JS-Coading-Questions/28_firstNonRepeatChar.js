// Find the First Non-Repeated Character in a String in JavaScript?

const findFirstNonRepeatChar = (s) => {
  const str = s.split("");
  const strMap = new Map();

  for (let char of str) {
    let isPresent = strMap.has(char);
    if (isPresent) {
      let val = strMap.get(char);
      strMap.set(char, val + 1);
    } else {
      strMap.set(char, 1);
    }
  }

  for (let [k, v] of strMap) {
    if (v === 1) {
      return k;
    }
  }

  return -1;
};

console.log(findFirstNonRepeatChar("GeeksForGeeks"));
