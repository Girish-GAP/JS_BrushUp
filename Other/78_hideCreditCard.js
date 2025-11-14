// cardNumber = "1234567890123456"
// "************3456"
//  Replacing the first 12 char with *

const hideCreditCard = (str) => {
  let num = str.slice(str.length - 4);
  num = "*".repeat(str.length - 4) + num;
  return num;
};

console.log(hideCreditCard("1234567890123456"));

// replace(/(.{4})/g, "$1 "); // group every 4 chars **** ****
