// Count / Remove Vowels in a String in JavaScript?

const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const strArr = str.split("");
  const ans = [];

  for (let i = 0; i < strArr.length; i++) {
    if (!vowels.includes(strArr[i])) {
      ans.push(strArr[i]);
    }
  }

  return ans.join("");
};

const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      cnt++;
    }
  }

  return cnt;
};

console.log(countVowels("hello geek"));
console.log(removeVowels("hello geek"));
