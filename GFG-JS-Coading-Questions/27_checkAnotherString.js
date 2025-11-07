// Check if a String Contains Another String in JavaScript?

// 2 loops
// 1 loop find the occurance of starting char
// 2 from starting char compare each char if match return if not match at any step break and continue first loop.

const checkAnotherString = (str, findStr) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === findStr[0]) {
      // if match compare rest
      for (let j = i, k = 0; k < findStr.length; j++, k++) {
        if (str[j] !== findStr[k]) {
          break;
        }
        if (k === findStr.length - 1) {
          return true;
        }
      }
    }
  }
  return false;
};

const str = "GeeksForGeeksForm";
const subStr = "For";

// console.log(str.includes(subStr)); // true
// console.log(str.indexOf(subStr) === -1 ? false : true);
// console.log(str.search(subStr)  === -1 ? false : true);

console.log(checkAnotherString(str, subStr));
