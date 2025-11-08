// Calculate the factorial of a number using recursion in JavaScript?
// Factorial : 1 to n multiplication

const findFactorial = (n, ans) => {
  if (n == 1) {
    return ans;
  }

  return findFactorial(n - 1, n * ans);
};

// Factorial base case : fact(1) = 1;
// changing no. is n so n * fact(n - 1);
// write base case first

const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// console.log(findFactorial(4, 1))
console.log(factorial(4));
