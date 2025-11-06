// Write a Program to print the frequency of elements in an arry ?

const getFreq = (arr) => {
  let reqMap = new Map();

  for (let value of arr) {
    const val = reqMap.get(value) || 0;
    reqMap.set(value, val + 1);
  }

  for (let [k, v] of reqMap) {
    console.log(k, " count is -> ", v);
  }
};

const getFreqWithoutMapSet = (arr) => {
  let feqObj = {};

  for (let value of arr) {
    if (feqObj[value]) {
      feqObj[value]++;
    } else {
      feqObj[value] = 1;
    }
  }

  console.log(feqObj);
};

getFreqWithoutMapSet([1, 2, 2, 3, 3, 3, 3, 3, 3, 1]);
