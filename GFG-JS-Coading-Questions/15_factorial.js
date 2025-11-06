// Write a Program to find factorial of a number?
// Factorial : . A factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// 4! = (4 *  3 * 2 * 1 = 24)

const getFactorial = (num) => {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(getFactorial(7));
