// reverse a given integer.

const reverseInteger = (num) => {
  let n = 0;

  while (num !== 0) {
    let lastDig = parseInt(num % 10);
    n = n * 10 + lastDig;
    num = parseInt(num / 10);
  }

  return n;
};

console.log(reverseInteger(54321));
