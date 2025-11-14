// Keyboard Error
// Given are two strings correct and wrong. Return all characters that are defective. You can recognize defective characters by the fact that they are displayed incorrectly in the string wrong. Return an array with their values.

const keyboardError = (correct, wrong) => {
  let wrongArr = [];
  for (let i = 0; i < wrong.length; i++) {
    let char = correct[i];
    if (char !== wrong[i] && !wrongArr.includes(char)) {
      wrongArr.push(char);
    }
  }

  return wrongArr;
};

console.log(keyboardError("foobar", "fiibnr")); // [ 'o', 'a' ]

console.log(keyboardError("you can do this!", "yoo cap do this?")); // [ 'u', 'n', '!' ]
