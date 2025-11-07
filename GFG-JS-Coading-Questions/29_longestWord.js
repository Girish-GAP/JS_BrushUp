// Find the Longest Word in a String in JavaScript?

const findLargestWord = (s) => {
  const str = s.split(" ");
  let largeWord = str[0];
  for (let word of str) {
    if (word.length > largeWord.length) {
      largeWord = word;
    }
  }

  return largeWord;
};

console.log(findLargestWord("Mountains are great"));
