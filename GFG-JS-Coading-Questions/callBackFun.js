// Write a Program to use a callback function?

const divideFun = (num1, num2, callBack) => {
  if (num2 === 0) {
    callBack("can not divide by 0", null);
  } else {
    callBack(null, num1 / num2);
  }
};

divideFun(1, 2, (error, ans) => {
  if (error) {
    console.log("Error" + error);
  } else {
    console.log("Ans" + ans);
  }
});
