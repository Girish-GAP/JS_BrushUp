// Write a Program to count the occurrences of a character in a string in JavaScript?

function countOccurance(str, char) {
  // console.log(str.split(char)) // [ 'kl', '', 'BDF', '', '', '' ]
  return str.split(char).length - 1;
}

const countChar = (str, charToCount) => {
  let cnt = 0;

  for (let char of str) {
    if (char === charToCount) {
      cnt++;
    }
  }
  return cnt;
};

console.log(countChar("klAABDFAAA", "A"));
