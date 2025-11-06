// Write a Program to print Fibonacci sequence up to n terms?
// Fibonacci : addition of 2 prev. no for next no.
// 0 1 1 2 3 5 8

const printFibonacci = (num) => {
  let lastNum = 0;
  let currentNum = 1;
  let fib = 0;

  for (let i = 0; i <= num; i++) {
    console.log(fib);
    fib = lastNum + currentNum;
    lastNum = currentNum;
    currentNum = fib;
  }
};

printFibonacci(10);
