const createCounter = (n) => {
  return function () {
    return n++; // n = n + 1 then return n // closure
  };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
