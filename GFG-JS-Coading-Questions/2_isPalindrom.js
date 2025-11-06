const checkPalindrom = (str) => {
  const palStr = str.split("").reverse().join("");
  return palStr === str;
};

console.log(checkPalindrom("GIRISH")); // FALES

console.log(checkPalindrom("LEVEL")); // TRUE
