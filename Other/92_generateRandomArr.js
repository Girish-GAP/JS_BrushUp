// generate random arr

const generateRandomArr = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    arr.push(randomNum);
  }

  return arr;
};

console.log(generateRandomArr(10));

// Next task : arr should be unique
