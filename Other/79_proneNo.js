// Write a function to check if no. is pronic.
// what is pronic ?
// it's product of 2 consecutive like 30 = 5 * 6;
// observation : all pronic no. are even
// not all even no. are pronic

const isPronic = (num) => {
  // odd no. are not pronic
  if (num % 2 !== 0) {
    return false;
  }

  if (num === 0) {
    return true;
  }

  let product = 1;
  let idx = 2;

  // while(product < num){
  //     product = idx * (idx-1);
  //     if(product === num){
  //         return true;
  //     }
  //     idx++;
  // }
  // return false;

  // Optimize :
  while (product < num) {
    idx++;
    product = idx * (idx - 1);
  }

  return product === num;
};

console.log(isPronic(1));
console.log(isPronic(30));
