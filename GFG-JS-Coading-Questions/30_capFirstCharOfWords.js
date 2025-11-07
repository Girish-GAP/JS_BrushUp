// Capitalize the First Letter of Each Word in a Sentence in JavaScript?

const capitalizeFirstWord = (s) => {
  let strArr = s.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    const capChar = strArr[i][0].toUpperCase();
    const restChar = strArr[i].slice(1);

    strArr[i] = capChar + restChar;
  }

  return strArr.join(" ");
};

let str = "ABCD";

console.log(capitalizeFirstWord("hello girish ashok pawar"));
