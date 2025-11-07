// Convert an Array of Strings to Uppercase in JavaScript?

const arrStringUppserCase = (strArr) => {
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].toUpperCase();
  }

  return strArr;
};

console.log(arrStringUppserCase(["g", "a", "p"]));
