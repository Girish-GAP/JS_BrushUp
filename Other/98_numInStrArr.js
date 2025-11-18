// Write a function which returns a list of elements which contains at least one character as digit

let numInStr = (arr) => {
  return arr.reduce((acc, item) => {
    for (let char of item) {
      if (!Number.isNaN(parseInt(char))) {
        acc.push(item);
        break;
      }
    }
    return acc;
  }, []);
};

console.log(numInStr(["1a", "a", "2b", "b"])); // ['1a', '2b']
console.log(numInStr(["abc", "abc10"])); // ['abc10']
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ['ab10c', 'a10bc']
console.log(numInStr(["this is a test", "test1"])); // ['test1']
