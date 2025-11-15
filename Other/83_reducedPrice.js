// Given is a number price and a number discount. Return the calculated discounted price. Round to two decimal places.

const getReducedPrice = (price, discount) => {
  let reduced = price - price * (discount / 100);
  let rounded = Math.round(reduced * 100) / 100;
  return parseFloat(rounded);
};

console.log(getReducedPrice(42, 3));
console.log(getReducedPrice(1000, 20));
console.log(getReducedPrice(99, 10));

console.log(getReducedPrice(42, 3));
console.log(getReducedPrice(3.99, 80));

// Expected output :
/*40.74
800
89.1
40.74
0.8
*/
