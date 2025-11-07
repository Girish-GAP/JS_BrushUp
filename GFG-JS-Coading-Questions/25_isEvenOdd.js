// Check if a Number is Even or Odd in JavaScript?

const checkIsEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIsEven(0) ? "EVEN" : "ODD");
