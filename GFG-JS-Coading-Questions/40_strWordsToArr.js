// Convert a string to an array of words in JavaScript?

const stringToArr = (str) => {
  return str.split(" ");
};

const stringToArrManual = (str) => {
  let strArr = [];
  let trackWord = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === " " || i === str.length - 1) {
      strArr.push(trackWord);
      trackWord = "";
    } else {
      trackWord = trackWord + char;
    }
  }

  return strArr;
};

console.log(stringToArrManual("Geeks For Geeks"));
